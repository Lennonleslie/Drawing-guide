import{_ as c,M as n,p,q as d,R as a,t as e,N as t,V as i,a1 as o}from"./framework-96b046e1.js";const h="/assets/下单前检查-227a26bd.png",l="/assets/JSON操作-844bf306.gif",_="/assets/上传JSON-b4993c88.png",u="/assets/审核界面-05417f87.png",f="/assets/审核界面2-0ad76490.png",m="/assets/应用通用工艺-28f64d3f.png",g={},N=o('<h1 id="流程简解" tabindex="-1"><a class="header-anchor" href="#流程简解" aria-hidden="true">#</a> 流程简解</h1><h2 id="设计部分" tabindex="-1"><a class="header-anchor" href="#设计部分" aria-hidden="true">#</a> 设计部分</h2><h3 id="进入设计工具" tabindex="-1"><a class="header-anchor" href="#进入设计工具" aria-hidden="true">#</a> 进入设计工具</h3>',3),b={href:"https://www.kodocode.cn/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.kujiale.com/",target:"_blank",rel:"noopener noreferrer"},S=o('<p><a href="">设计案例</a></p><h3 id="检查" tabindex="-1"><a class="header-anchor" href="#检查" aria-hidden="true">#</a> 检查</h3><p>在设计完成之后。我们进入初步的检查。</p><p><img src="'+h+'" alt=""></p><p>重点检查<strong>是否有户型外的家具</strong>。</p><p>否则会导致多出来不必要的柜体。产生不必要柜体和板件</p><p>检测</p><ol><li>规则检测 <ul><li>为指定的特殊模型达到某些条件提示的报警</li></ul></li><li>有效性检测 <ul><li>模型版本老旧</li><li>模型已被删除</li></ul></li><li>干涉检测 <ul><li>模型之间相互碰撞交叉</li></ul></li></ol><p>否则会导致多出来不必要的柜体。产生不必要柜体和板件</p><h3 id="下载数据文件-json" tabindex="-1"><a class="header-anchor" href="#下载数据文件-json" aria-hidden="true">#</a> 下载数据文件（JSON）</h3><p><img src="'+l+'" alt=""></p><p>设计师在设计界面。</p><p>点击上方靠左的文件按钮</p><p>在导出选项中，选择对应的JSON导出</p><p>每次导出时，建议重新生成并下载。</p><p><strong>如果没有重新生成，则此次JSON文件是之前的生成的，JSON文件不包含最新修改的内容。</strong></p><p>导出JSON的注意点</p><blockquote><p>在房间选择里，选择了指定房间，也可以导出指定房间的JSON</p><p>可以选择楼层导出JSON</p><p>可以选择整个方案导出JSON</p></blockquote><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>注意：目前无法同时导出一个具备【厨卫】【全屋家具】【门窗】一体的JSON文件</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p><strong>如果下载的JSON文件体系大于35MB，建议把订单拆分制作。因为这个会提高错误率和修改成本。并且会导致因数据过大，造成的过载。以至于无法正常运行网页。</strong></p></div><h2 id="快速解析下单" tabindex="-1"><a class="header-anchor" href="#快速解析下单" aria-hidden="true">#</a> 快速解析下单</h2>',21),k={href:"https://ds.wongshek.cn/a",target:"_blank",rel:"noopener noreferrer"},E={href:"https://cad.wongshek.cn/a",target:"_blank",rel:"noopener noreferrer"},B=o('<h3 id="快速导入解析" tabindex="-1"><a class="header-anchor" href="#快速导入解析" aria-hidden="true">#</a> 快速导入解析</h3><p>点击上方的<code>一键拆单</code>跳转入我们对应账号的方案列表里。</p><p>上方有个JSON文件的输入窗口并且有一些筛选工具。</p><p>点击<code>选择文件</code>进入文件选择窗口，选择我们之前下载好的JSON文件。并点击<code>上传</code>按钮。</p><p>下方就会出现对应JSON文件名称的方案，点击<code>审核工艺</code>，进入审核页面。</p><p><img src="'+_+'" alt=""></p><h3 id="审核页面操作" tabindex="-1"><a class="header-anchor" href="#审核页面操作" aria-hidden="true">#</a> 审核页面操作</h3><p><img src="'+u+'" alt=""></p><p>审核页面内容极多。</p><p>上方一行为<code>导航栏</code>，左侧为<code>方案结构</code>和<code>属性信息</code>右侧为<code>工艺配置</code>中间主窗口是审核窗口</p><p><img src="'+f+'" alt=""></p><h3 id="快速适配工艺" tabindex="-1"><a class="header-anchor" href="#快速适配工艺" aria-hidden="true">#</a> 快速适配工艺</h3><p>通过<code>更多操作</code>里面的<code>应用通用工艺</code>，可以快速对相对的柜体快速适配已经设置好的工艺库。</p><p>操作如图</p><p><img src="'+m+'" alt=""></p><p>注意：单元柜工艺的选项会根据每个公司的工艺不同而有不同的选项。</p><h3 id="一键拆单" tabindex="-1"><a class="header-anchor" href="#一键拆单" aria-hidden="true">#</a> 一键拆单</h3><p>在<code>更多操作选项</code>的左侧，有一个一键拆单的按钮。在检测之后确认无误之后。点击一键拆单可以进行自动拆单。</p>',18);function J(O,A){const r=n("ExternalLinkIcon"),s=n("RouterLink");return p(),d("div",null,[N,a("p",null,[e("我们可以在"),a("a",b,[e("首页"),t(r)]),e("进入"),a("a",x,[e("酷家乐"),t(r)])]),a("p",null,[e("按照"),t(s,{to:"/start/%E5%88%9D%E6%AD%A5%E4%BA%86%E8%A7%A3.html#%E5%88%9B%E5%BB%BA%E9%A1%B9%E7%9B%AE%E5%8F%8A%E7%94%BB%E5%9B%BE"},{default:i(()=>[e("初步了解")]),_:1}),e("的流程进行初步的设计。")]),S,a("p",null,[e("进入王石软件，王石软件分为"),a("a",k,[e("DS版本"),t(r)]),e("和"),a("a",E,[e("CAD版本"),t(r)]),e("，基本使用没有什么区别。细节上存在一些逻辑上的区别。但需要注意已经购买的版本，不同版本之间的账号不可互通。并且2023年之后会以CAD版本为主。")]),B])}const v=c(g,[["render",J],["__file","流程简解.html.vue"]]);export{v as default};
