import{_ as e,c as a,o as n,a as s}from"./app.6b7f71db.js";var t="/docs/media/svg/relay.svg";const y='{"title":"Relay","description":"","frontmatter":{},"headers":[{"level":2,"title":"Relay","slug":"relay"},{"level":3,"title":"A simple Gun DB relay peer","slug":"a-simple-gun-db-relay-peer"},{"level":3,"title":"How to use","slug":"how-to-use"},{"level":3,"title":"Options","slug":"options"},{"level":3,"title":"Run your own!","slug":"run-your-own"}],"relativePath":"relay/index.md","lastUpdated":1642144864834}',o={},r=s('<p><img src="'+t+`" alt=""></p><h2 id="relay" tabindex="-1">Relay <a class="header-anchor" href="#relay" aria-hidden="true">#</a></h2><h3 id="a-simple-gun-db-relay-peer" tabindex="-1">A simple Gun DB relay peer <a class="header-anchor" href="#a-simple-gun-db-relay-peer" aria-hidden="true">#</a></h3><p>A one liner gun js server to run in a free tier js hosting like <a href="http://www.glitch.com" target="_blank" rel="noopener noreferrer">www.glitch.com</a>, <a href="http://www.heroku.com" target="_blank" rel="noopener noreferrer">www.heroku.com</a> or others</p><h3 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a></h3><ol><li>Install the package <code>npm i @gun-vue/relay</code></li><li>Import it and initiate.</li></ol><div class="language-js"><pre><code><span class="token keyword">import</span> relay <span class="token keyword">from</span> <span class="token string">&quot;@gun-vue/relay&quot;</span><span class="token punctuation">;</span>

relay<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="3"><li>You&#39;ve got your Gun relay running!</li></ol><h3 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-hidden="true">#</a></h3><p>You can use customize your server with an options object:</p><div class="language-js"><pre><code>relay<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token comment">// it&#39;s used to name the pulse timestamp of the server. Set your peer ule without a protocol, like  &#39;relay.some-site.com&#39;</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">4200</span><span class="token punctuation">,</span> <span class="token comment">// gun server port. You may use a more standard 8080.</span>
  <span class="token literal-property property">store</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// put true if you want to have Gun store data on disk.</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;public&quot;</span><span class="token punctuation">,</span> <span class="token comment">// a public directory to expose your app with the express server. Insert a path like &#39;../demo/dist&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="run-your-own" tabindex="-1">Run your own! <a class="header-anchor" href="#run-your-own" aria-hidden="true">#</a></h3><p>Just remix the Glitch project and have fun!</p><p><a href="https://glitch.com/~etogun" target="_blank" rel="noopener noreferrer">Glitch project</a></p>`,14),p=[r];function l(i,c,u,d,h,k){return n(),a("div",null,p)}var g=e(o,[["render",l]]);export{y as __pageData,g as default};