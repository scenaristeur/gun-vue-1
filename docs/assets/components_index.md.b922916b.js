import{_ as t,c as s,b as a,a as n,r as o,o as l}from"./app.6b7f71db.js";var c="/docs/media/svg/components.svg";const T='{"title":"Components","description":"","frontmatter":{},"headers":[{"level":2,"title":"Components","slug":"components"},{"level":2,"title":"How to install","slug":"how-to-install"},{"level":2,"title":"Relay","slug":"relay"},{"level":3,"title":"Icon","slug":"icon"},{"level":2,"title":"User","slug":"user"},{"level":3,"title":"UserIcon","slug":"usericon"},{"level":2,"title":"Feed","slug":"feed"},{"level":3,"title":"FeedBlock","slug":"feedblock"},{"level":2,"title":"Space","slug":"space"}],"relativePath":"components/index.md","lastUpdated":1642358885170}',r={},i=n('<p><img src="'+c+`" alt=""></p><h2 id="components" tabindex="-1">Components <a class="header-anchor" href="#components" aria-hidden="true">#</a></h2><p>Pluggable Gun DB + Vue UI components</p><p>WIP, no docs for now. Refer to <a href="https://github.com/davay42/gun-vue" target="_blank" rel="noopener noreferrer">@gun-vue repo</a> and the use of the components in the <a href="https://github.com/davay42/gun-vue/tree/master/demo" target="_blank" rel="noopener noreferrer">@gun-vue/demo</a></p><h2 id="how-to-install" tabindex="-1">How to install <a class="header-anchor" href="#how-to-install" aria-hidden="true">#</a></h2><ol><li>Install the components library: <code>npm i @gun-vue/components</code></li><li>Import a component to your Vue 3 project: <code>import {RelayPulse} from &#39;@gun-vue/components&#39;</code></li><li>Use the component in your SFC template: <code>&lt;relay-pulse /&gt;</code></li><li>Have fun combining different components with a shared Gun state.</li></ol><h2 id="relay" tabindex="-1">Relay <a class="header-anchor" href="#relay" aria-hidden="true">#</a></h2><h3 id="icon" tabindex="-1">Icon <a class="header-anchor" href="#icon" aria-hidden="true">#</a></h3><p>A small blinking button, that shows basic stats for current Gun relay in use</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>relay-icon</span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,10),p=n(`<h2 id="user" tabindex="-1">User <a class="header-anchor" href="#user" aria-hidden="true">#</a></h2><h3 id="usericon" tabindex="-1">UserIcon <a class="header-anchor" href="#usericon" aria-hidden="true">#</a></h3><p>A powerful tool to manage current user. Click the icon and a modal window will appear. You can create a new user, login with an existing keypair (either encrypted or not), edit your profile fields and more.</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>user-icon</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>120<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,4),d=n(`<h2 id="feed" tabindex="-1">Feed <a class="header-anchor" href="#feed" aria-hidden="true">#</a></h2><h3 id="feedblock" tabindex="-1">FeedBlock <a class="header-anchor" href="#feedblock" aria-hidden="true">#</a></h3><p>Immutable comments at any given url</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feed-block</span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,4),u=n(`<h2 id="space" tabindex="-1">Space <a class="header-anchor" href="#space" aria-hidden="true">#</a></h2><p>A common meeting place in the gun universe. 1x1 field to place yout user at.</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>space-plane</span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,3);function h(_,m,g,f,v,k){const e=o("GunVue");return l(),s("div",null,[i,a(e,{component:"RelayIcon"}),p,a(e,{component:"UserIcon",pr:{size:120}}),d,a(e,{component:"FeedBlock"}),u,a(e,{component:"SpacePlane"})])}var y=t(r,[["render",h]]);export{T as __pageData,y as default};