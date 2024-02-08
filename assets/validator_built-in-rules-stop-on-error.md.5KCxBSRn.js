import{_ as s,c as i,o as a,V as n}from"./chunks/framework.szqEfhRr.js";const g=JSON.parse('{"title":"StopOnError - stop validation on the first error","description":"","frontmatter":{"editLink":true,"lastUpdated":true},"headers":[],"relativePath":"validator/built-in-rules-stop-on-error.md","filePath":"validator/built-in-rules-stop-on-error.md","lastUpdated":null}'),e={name:"validator/built-in-rules-stop-on-error.md"},l=n(`<h1 id="stoponerror-stop-validation-on-the-first-error" tabindex="-1"><code>StopOnError</code> - stop validation on the first error <a class="header-anchor" href="#stoponerror-stop-validation-on-the-first-error" aria-label="Permalink to &quot;\`StopOnError\` - stop validation on the first error&quot;">​</a></h1><p>This rule applies to a group of rules and allows you to stop the validation for the whole group immediately after an error occurs in any of the rules. This means that all rules following the rule that failed validation won&#39;t be run at all.</p><p>This can be useful for performance-intensive validations, such as database queries or some complex calculations. The order of rules within a group is crucial here - the &quot;lightweight&quot; rules need to be placed above the &quot;heavy&quot; ones:</p><div class="language-php vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Yiisoft\\Validator\\Rule\\Length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Yiisoft\\Validator\\Rule\\Required</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Yiisoft\\Validator\\Rule\\StopOnError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Yiisoft\\Validator\\Validator</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$rule </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> StopOnError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;Lightweight&quot; rule, will be run and won&#39;t pass the validation.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> MyHeavyRule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;Heavy&quot; rule, won&#39;t be run at all because of the existing error.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Validator</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">validate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($data, $rule);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>When using with other rules and conditional validation, it behaves like a single unit. For example, with default settings it will not be skipped if the previous rule didn&#39;t pass the validation. To change this behavior, set <code>$skipOnError</code> to <code>true</code>. This allows to use it for limiting the list of errors per attribute to just the first one in <em>(HTML forms, for example)</em>.</p><div class="language-php vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$rules </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;attribute1&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> SimpleRule1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Let&#39;s say there is an error.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Then this rule is skipped completely with all its related rules because \`skipOnError\` is set to \`true\`. Useful</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // when all rules within \`StopOnError\` are heavy.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;attribute2&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> StopOnError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        [</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> HeavyRule1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Skipped.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> HeavyRule2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Skipped.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line highlighted diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        skipOnError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ),</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // This rule is not skipped because \`skipOnError\` is \`false\` by default. Useful for forcing validation and</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // limiting the errors.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;attribute3&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> StopOnError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> SimpleRule2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Assuming there is another error.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> SimpleRule3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Skipped.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]),</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Skipping of other intermediate rules depends on \`skipOnError\` option set in these intermediate rules.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;attribute4&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> SimpleRule4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Not skipped, because \`skipOnError\` is \`false\` by default.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>Use grouping / ordering / <code>skipOnError</code> option to achieve the desired effect.</p><hr><p>Back to <a href="/yiisoft/validator.html">Yii Validator</a></p>`,9),t=[l];function p(r,h,k,d,o,E){return a(),i("div",null,t)}const c=s(e,[["render",p]]);export{g as __pageData,c as default};
