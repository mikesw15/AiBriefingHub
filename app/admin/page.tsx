'use client';

import { useState, useEffect } from 'react';
import { auth, db } from '@/lib/firebase';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, query, orderBy, serverTimestamp } from 'firebase/firestore';
import Header from '@/components/Header';
import { Plus, Settings, Sparkles, FileText, Trash2, Edit, LogOut } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'articles' | 'ai' | 'settings'>('articles');

  // Settings State
  const [elitePrice, setElitePrice] = useState(49);
  const [currency, setCurrency] = useState('£');
  const [savingSettings, setSavingSettings] = useState(false);

  // Articles State
  const [articles, setArticles] = useState<any[]>([]);
  const [loadingArticles, setLoadingArticles] = useState(false);

  // AI Generator State
  const [aiPrompt, setAiPrompt] = useState('');
  const [generating, setGenerating] = useState(false);
  const [generatedArticle, setGeneratedArticle] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        await checkAdminStatus(currentUser);
      } else {
        setIsAdmin(false);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const checkAdminStatus = async (user: User) => {
    try {
      // Try to read settings to verify admin
      const settingsDoc = await getDoc(doc(db, 'settings', 'global'));
      setIsAdmin(true);
      if (settingsDoc.exists()) {
        setElitePrice(settingsDoc.data().elitePrice);
        setCurrency(settingsDoc.data().currency);
      } else {
        // Initialize settings if they don't exist
        await setDoc(doc(db, 'settings', 'global'), {
          elitePrice: 49,
          currency: '£'
        });
      }
      fetchArticles();
    } catch (error) {
      console.error("Not an admin or error:", error);
      setIsAdmin(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleLogout = () => {
    signOut(auth);
  };

  const fetchArticles = async () => {
    setLoadingArticles(true);
    try {
      const q = query(collection(db, 'articles'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const fetchedArticles = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setArticles(fetchedArticles);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoadingArticles(false);
    }
  };

  const saveSettings = async () => {
    setSavingSettings(true);
    try {
      await updateDoc(doc(db, 'settings', 'global'), {
        elitePrice: Number(elitePrice),
        currency
      });
      alert('Settings saved successfully!');
    } catch (error) {
      console.error("Error saving settings:", error);
      alert('Failed to save settings.');
    } finally {
      setSavingSettings(false);
    }
  };

  const generateArticle = async () => {
    if (!aiPrompt) return;
    setGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY as string });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Write a tech news article about: ${aiPrompt}. 
        Format the response as a JSON object with the following keys:
        - title (string, catchy headline)
        - summary (string, 1-2 sentences)
        - content (string, 3-4 paragraphs of detailed content)
        - category (string, e.g., 'Intelligence', 'Markets', 'Research')
        - readTime (string, e.g., '5 min read')
        - imageUrl (string, a relevant picsum seed url like 'https://picsum.photos/seed/ai/800/600')
        - author (string, e.g., 'AI Briefing Desk')
        Do not include markdown formatting like \`\`\`json, just return the raw JSON object.`,
      });

      let jsonStr = response.text?.trim() || '{}';
      if (jsonStr.startsWith('\`\`\`json')) {
        jsonStr = jsonStr.replace(/\`\`\`json/g, '').replace(/\`\`\`/g, '').trim();
      }
      
      const articleData = JSON.parse(jsonStr);
      setGeneratedArticle(articleData);
    } catch (error) {
      console.error("Error generating article:", error);
      alert('Failed to generate article.');
    } finally {
      setGenerating(false);
    }
  };

  const publishGeneratedArticle = async () => {
    if (!generatedArticle) return;
    try {
      const slug = generatedArticle.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      const newArticle = {
        ...generatedArticle,
        slug,
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        published: true,
        createdAt: serverTimestamp()
      };
      
      await setDoc(doc(db, 'articles', slug), newArticle);
      alert('Article published successfully!');
      setGeneratedArticle(null);
      setAiPrompt('');
      fetchArticles();
      setActiveTab('articles');
    } catch (error) {
      console.error("Error publishing article:", error);
      alert('Failed to publish article.');
    }
  };

  const deleteArticle = async (id: string) => {
    if (!confirm('Are you sure you want to delete this article?')) return;
    try {
      await deleteDoc(doc(db, 'articles', id));
      fetchArticles();
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-surface text-on-surface">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body selection:bg-primary/30 antialiased">
        <Header />
        <main className="flex-grow flex items-center justify-center px-6 pt-20">
          <div className="bg-surface-container p-8 rounded-sm border border-outline-variant/10 max-w-md w-full text-center">
            <h1 className="font-headline text-3xl font-black mb-6 uppercase">Admin Access</h1>
            <button 
              onClick={handleLogin}
              className="w-full py-4 kinetic-gradient text-on-primary-container font-black uppercase tracking-wider rounded-sm hover:brightness-110 active:scale-95 transition-all"
            >
              Sign in with Google
            </button>
          </div>
        </main>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body selection:bg-primary/30 antialiased">
        <Header />
        <main className="flex-grow flex items-center justify-center px-6 pt-20">
          <div className="bg-surface-container p-8 rounded-sm border border-outline-variant/10 max-w-md w-full text-center">
            <h1 className="font-headline text-3xl font-black mb-4 uppercase text-error">Access Denied</h1>
            <p className="text-on-surface-variant mb-6">You do not have administrator privileges.</p>
            <button 
              onClick={handleLogout}
              className="px-6 py-2 border border-outline-variant/20 rounded-sm hover:bg-surface-container-high transition-colors"
            >
              Sign Out
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body selection:bg-primary/30 antialiased">
      <Header />
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
            <div>
              <h1 className="font-headline text-4xl font-black tracking-tighter uppercase">Command Center</h1>
              <p className="text-on-surface-variant">Manage articles, AI automation, and settings.</p>
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 border border-outline-variant/20 rounded-sm hover:bg-surface-container-high transition-colors w-fit"
            >
              <LogOut size={16} /> Sign Out
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-64 shrink-0 space-y-2">
              <button 
                onClick={() => setActiveTab('articles')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm font-bold transition-colors ${activeTab === 'articles' ? 'bg-primary/10 text-primary' : 'hover:bg-surface-container-high text-on-surface-variant'}`}
              >
                <FileText size={20} /> Articles
              </button>
              <button 
                onClick={() => setActiveTab('ai')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm font-bold transition-colors ${activeTab === 'ai' ? 'bg-secondary/10 text-secondary' : 'hover:bg-surface-container-high text-on-surface-variant'}`}
              >
                <Sparkles size={20} /> AI Generator
              </button>
              <button 
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm font-bold transition-colors ${activeTab === 'settings' ? 'bg-tertiary/10 text-tertiary' : 'hover:bg-surface-container-high text-on-surface-variant'}`}
              >
                <Settings size={20} /> Settings
              </button>
            </div>

            {/* Main Content */}
            <div className="flex-grow bg-surface-container p-6 md:p-8 rounded-sm border border-outline-variant/10">
              
              {/* Articles Tab */}
              {activeTab === 'articles' && (
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="font-headline text-2xl font-bold uppercase">Published Articles</h2>
                    <button onClick={() => setActiveTab('ai')} className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary-container font-bold rounded-sm hover:brightness-110 transition-all text-sm">
                      <Plus size={16} /> New Article
                    </button>
                  </div>
                  
                  {loadingArticles ? (
                    <p className="text-on-surface-variant">Loading articles...</p>
                  ) : articles.length === 0 ? (
                    <p className="text-on-surface-variant">No articles found. Generate one!</p>
                  ) : (
                    <div className="space-y-4">
                      {articles.map(article => (
                        <div key={article.id} className="flex items-center justify-between p-4 bg-surface border border-outline-variant/10 rounded-sm">
                          <div>
                            <h3 className="font-bold text-lg">{article.title}</h3>
                            <div className="flex gap-4 text-xs text-on-surface-variant mt-1">
                              <span>{article.category}</span>
                              <span>{article.date}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button onClick={() => deleteArticle(article.id)} className="p-2 text-error hover:bg-error/10 rounded-sm transition-colors" title="Delete">
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* AI Generator Tab */}
              {activeTab === 'ai' && (
                <div>
                  <h2 className="font-headline text-2xl font-bold uppercase mb-2">OpenClaw AI Generator</h2>
                  <p className="text-on-surface-variant mb-8">Automate your news posts using Gemini.</p>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wider">Topic or Prompt</label>
                      <textarea 
                        value={aiPrompt}
                        onChange={(e) => setAiPrompt(e.target.value)}
                        rows={3} 
                        className="w-full bg-surface border border-outline-variant/20 rounded-sm px-4 py-3 text-on-surface focus:outline-none focus:border-secondary transition-colors resize-none" 
                        placeholder="e.g., The impact of OpenAI's new reasoning model on coding tasks..."
                      ></textarea>
                    </div>
                    <button 
                      onClick={generateArticle}
                      disabled={generating || !aiPrompt}
                      className="flex items-center justify-center gap-2 w-full py-4 bg-secondary text-on-secondary font-black uppercase tracking-wider rounded-sm hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {generating ? 'Generating...' : <><Sparkles size={20} /> Generate Draft</>}
                    </button>

                    {generatedArticle && (
                      <div className="mt-8 p-6 border border-secondary/30 bg-secondary/5 rounded-sm">
                        <h3 className="font-headline text-xl font-bold mb-4 text-secondary">Generated Draft</h3>
                        <div className="space-y-4 mb-6">
                          <div><strong className="text-on-surface-variant">Title:</strong> {generatedArticle.title}</div>
                          <div><strong className="text-on-surface-variant">Summary:</strong> {generatedArticle.summary}</div>
                          <div><strong className="text-on-surface-variant">Category:</strong> {generatedArticle.category}</div>
                          <div><strong className="text-on-surface-variant">Content:</strong> <p className="mt-2 text-sm opacity-80 line-clamp-3">{generatedArticle.content}</p></div>
                        </div>
                        <button 
                          onClick={publishGeneratedArticle}
                          className="w-full py-3 bg-primary text-on-primary-container font-bold uppercase tracking-wider rounded-sm hover:brightness-110 transition-all"
                        >
                          Publish Article
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div>
                  <h2 className="font-headline text-2xl font-bold uppercase mb-8">Platform Settings</h2>
                  
                  <div className="space-y-6 max-w-md">
                    <div>
                      <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wider">Currency Symbol</label>
                      <input 
                        type="text" 
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="w-full bg-surface border border-outline-variant/20 rounded-sm px-4 py-3 text-on-surface focus:outline-none focus:border-tertiary transition-colors" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wider">Elite Access Price / Month</label>
                      <input 
                        type="number" 
                        value={elitePrice}
                        onChange={(e) => setElitePrice(Number(e.target.value))}
                        className="w-full bg-surface border border-outline-variant/20 rounded-sm px-4 py-3 text-on-surface focus:outline-none focus:border-tertiary transition-colors" 
                      />
                    </div>
                    <button 
                      onClick={saveSettings}
                      disabled={savingSettings}
                      className="w-full py-4 bg-tertiary text-on-tertiary font-black uppercase tracking-wider rounded-sm hover:brightness-110 active:scale-95 transition-all disabled:opacity-50"
                    >
                      {savingSettings ? 'Saving...' : 'Save Settings'}
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
