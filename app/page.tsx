import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 头部个人信息 */}
        <section className="py-8 mb-12">
          <div className="text-center space-y-4">
            <div className="mb-6 flex justify-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/avatar.jpg"
                  alt="雷秀秀的照片"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">雷秀秀</h1>
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-gray-600 text-sm">
              <div className="flex items-center justify-center hover:text-red-500 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>leixiuxiu23@163.com</span>
              </div>
              <div className="flex items-center justify-center hover:text-red-500 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>18108632872</span>
              </div>
            </div>
          </div>
        </section>

        {/* 教育背景 */}
        <section className="mb-12">
          <h2 className="text-lg font-bold mb-6 flex items-center after:content-[''] after:h-[1px] after:flex-1 after:ml-4 after:bg-gray-200">教育背景</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <h3 className="text-base font-bold">华中农业大学（211）</h3>
              <p className="text-sm text-gray-500 mb-2">工商管理 | 2018.09-2022.06</p>
              <p className="text-sm text-gray-600 mb-3">GPA: 3.5/4.0</p>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium text-gray-600 mb-1.5">主修课程：</h4>
                  <p className="text-sm text-gray-600">统计学、中级计量、战略管理、中级宏观、中级微观、数学建模、Python、财会、拓扑学、证券市场分析、市场预测等</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <h3 className="text-base font-bold">华中农业大学</h3>
              <p className="text-sm text-gray-500 mb-2">数据科学 荣誉辅修 | 2020.02-2021.02</p>
              <div>
                <h4 className="text-sm font-medium text-gray-600 mb-1.5">主修课程：</h4>
                <p className="text-sm text-gray-600">SAS基础、非参数统计与SAS、多元统计分析与SAS、统计模拟与可视化、贝叶斯统计、时间序列分析、Python实战等</p>
              </div>
            </div>
          </div>
        </section>

        {/* 工作与实习经历 */}
        <section className="mb-12 overflow-hidden">
          <h2 className="text-lg font-bold mb-6 flex items-center after:content-[''] after:h-[1px] after:flex-1 after:ml-4 after:bg-gray-200">工作与实习经历</h2>
          <div className="flex overflow-x-auto pb-6 gap-6 snap-x snap-mandatory">
            {/* 互联网产品研究 */}
            <div className="snap-center shrink-0 first:pl-4 last:pr-4">
              <div className="w-[400px] h-[600px] bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-50">
                  <h3 className="text-base font-bold sticky top-0 bg-white pb-2">
                    互联网产品研究（自学）
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">2024.11-2025.04</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">数据分析</h4>
                      <p className="text-sm text-gray-600">深入学习数据分析。能利用Tableau进行数据可视化，掌握SQL数据库操作，并通过LeetCode和牛客网进行练习</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">商业分析</h4>
                      <p className="text-sm text-gray-600">能高效进行信息检索、搜集和总结归纳。完成多项商业分析课，包括中国科学技术大学《信息管理与分析》课程，Victor Cheng主讲的《Case Interview Secrets》课程，B站《金融与商业分析》课程，输出《中国自动驾驶芯片报告》</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">PM知识及项目实践</h4>
                      <p className="text-sm text-gray-600">掌握Figma，ProcessOn等工具，基于以上知识，利用Cursor、Coze等平台，独立完成四个实战项目</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 地平线 */}
            <div className="snap-center shrink-0">
              <div className="w-[400px] h-[600px] bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-50">
                  <h3 className="text-base font-bold sticky top-0 bg-white pb-2">
                    地平线机器人技术研发有限公司
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">战略分析 总裁办（实习） | 2024.03-2024.10</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">LLM探索</h4>
                      <p className="text-sm text-gray-600">掌握大型语言模型知识，完成Google《Generative AI》课程，吴恩达《大语言模型》系列课程学习。整理前沿信息源，阅读外文材料，输出每日行业动态；整理智能驾驶及芯片行业信息，梳理竞争格局、竞对动态等，更新情报系统</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">辅助CEO（余凯）决策</h4>
                      <p className="text-sm text-gray-600">通过各渠道对投资机构背调，形成报告协助CEO决策；制作CEO大客户拜访、上海车展等重要商务活动中的PPT材料</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">投资者关系</h4>
                      <p className="text-sm text-gray-600">策划投资者日，和产品、资本运营等部门协调活动日程、人员分工，安排参观动线、demo车试驾等，增强投资者对公司认知</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 海外申请 */}
            <div className="snap-center shrink-0">
              <div className="w-[400px] h-[600px] bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-50">
                  <h3 className="text-base font-bold sticky top-0 bg-white pb-2">
                    海外QS Top100高校申请（留学）
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">2023.10-2024.02</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">斩获6所QS Top100院校录取</h4>
                      <p className="text-sm text-gray-600">独立完成8所院校申请，进行跨院校的专业、申请流程及文件梳理，利用AI辅助撰写PS、CV及研究计划等材料，将准备周期缩短50%，获曼彻斯特大学、爱丁堡大学等6份硕士录取，主攻数字与商业分析</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">经验变现</h4>
                      <p className="text-sm text-gray-600">在小红书分享留学申请经验，单篇帖子最高观看量4w+次、点赞1k+，为某留学机构带来70个高潜客户leads，指导他人留学申请</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">语言能力突破</h4>
                      <p className="text-sm text-gray-600">雅思突破7分，并以优秀成绩通过APS留德审核</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 字节跳动 */}
            <div className="snap-center shrink-0">
              <div className="w-[400px] h-[600px] bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-50">
                  <h3 className="text-base font-bold sticky top-0 bg-white pb-2">
                    字节跳动科技有限公司
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">商业化管培生 | 2022.06-2023.09</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">项目规划统筹</h4>
                      <p className="text-sm text-gray-600">在招商&策划部门轮岗两月，基于垂媒平台特性(用户画像/内容生态等)拆解品牌Brief，整合内部资源，推动跨部门协作(招商/资管/PM)，设计利益平衡方案，制定「广告曝光+内容种草+直播收割」全链路策略，提案10+次，独立达成合作1250w</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">用户需求分析</h4>
                      <p className="text-sm text-gray-600">利用懂车行数据平台、O5A营销模型，进行案头研究，围绕用户运营、用户行为路径分析定位高转化路径，进行用户流量分发AB Test，提高到店率4%，形成showcase，向品牌市场/媒介/战略部汇报策略（6+次）</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">业务数据分析</h4>
                      <p className="text-sm text-gray-600">梳理数据指标体系，对广告代理公司培训2次，开展高层数据交流（5+次），提高客户对O5A模型认可度；分析本品竞品大盘、市场、用户、内容、舆情等数据，定位客户销量、线索及营销问题</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">CPS合作谈判</h4>
                      <p className="text-sm text-gray-600">开展厂商调研及合作复盘，进行竞品分析，搭建看板进行数据测算，输出线索解耦策略、CPS结算策略（3+次），和采购谈判，2023年年框合作8000w+</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">SaaS产品管理</h4>
                      <p className="text-sm text-gray-600">配合主机厂管理经销商，展开经销商产品使用培训(一月一次)，处理产品换代出现的问题；负责对接总部采购、财务，独立处理极限复杂的结算材料，追回年前拖欠款项6000w+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 网易 */}
            <div className="snap-center shrink-0">
              <div className="w-[400px] h-[600px] bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-50">
                  <h3 className="text-base font-bold sticky top-0 bg-white pb-2">
                    网易游戏有限公司
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">产品增长运营 产品部（实习） | 2021.06-2021.09</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">活动运营</h4>
                      <p className="text-sm text-gray-600">捕捉热点策划奥运专题系列活动、教师节闪购、秒杀活动，最高曝光量46w，24h闪购营收最高达60w+。针对端内用户活跃度低的问题，探索性采用H5游戏，提高活动吸引力，点击转化率提升2.8%，营收3w+</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">直播运营</h4>
                      <p className="text-sm text-gray-600">策划线上直播（4+场）进行用户转化，制定直播全流程SOP，协调资源点位，沟通技术、设计等人员合作，采用两套宣发页面进行AB Test，场直播营收最高达10w+，最多两天举办直播30+场，总观看人数达15w+</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">用户调研</h4>
                      <p className="text-sm text-gray-600">面对&ldquo;双减&rdquo;用户退费冲击，调研学而思、猿辅导等竞品产品功能，向产品提出优化内容库展示需求；设计问卷，调研用户最新需求，配合销售和辅导输出防退费方案</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 项目展示 */}
        <section className="mb-12 overflow-hidden">
          <h2 className="text-lg font-bold mb-6 flex items-center after:content-[&apos;&apos;] after:h-[1px] after:flex-1 after:ml-4 after:bg-gray-200">项目展示</h2>
          <div className="flex overflow-x-auto pb-6 gap-6 snap-x snap-mandatory">
            {/* 网易云音乐项目 */}
            <div className="snap-center shrink-0 first:pl-4 last:pr-4">
              <div className="w-[300px] bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="aspect-video relative bg-gradient-to-br from-red-50 to-gray-50">
                  <a href="/网易云原型图index.html" target="_blank" className="block w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="/project-preview-music.png"
                        alt="音乐流媒体原型预览"
                        width={300}
                        height={169}
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                      <span className="absolute px-4 py-2 bg-red-500 text-white text-sm rounded-full opacity-0 group-hover:opacity-100 transform group-hover:-translate-y-1 transition-all duration-300">
                        查看原型演示
                      </span>
                    </div>
                  </a>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold mb-2 group-hover:text-red-500 transition-colors">音乐流媒体原型复刻</h3>
                  <p className="text-sm text-gray-600">使用Cursor及Figma复刻网易云产品原型，设计涵盖音乐播放、歌单管理等核心功能模块。</p>
                </div>
              </div>
            </div>

            {/* 疯狂猜词小程序 */}
            <div className="snap-center shrink-0">
              <div className="w-[300px] bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="aspect-video relative bg-gradient-to-br from-blue-50 to-gray-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/project-preview-game.png"
                      alt="疯狂猜词小程序预览"
                      width={300}
                      height={169}
                      className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="absolute px-4 py-2 bg-blue-500 text-white text-sm rounded-full opacity-0 group-hover:opacity-100 transform group-hover:-translate-y-1 transition-all duration-300">
                      扫码体验
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold mb-2 group-hover:text-blue-500 transition-colors">疯狂猜词小程序</h3>
                  <p className="text-sm text-gray-600">开发多人互动猜词游戏，支持6大类别超60个词条的实时游戏。</p>
                </div>
              </div>
            </div>

            {/* 英语口语Agent */}
            <div className="snap-center shrink-0">
              <div className="w-[300px] bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="aspect-video relative bg-gradient-to-br from-green-50 to-gray-50">
                  <a href="https://www.bilibili.com/video/BV1dGL7zwEjz/" target="_blank" className="block w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="/project-preview-english.png"
                        alt="英语口语Agent预览"
                        width={300}
                        height={169}
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                      <span className="absolute px-4 py-2 bg-green-500 text-white text-sm rounded-full opacity-0 group-hover:opacity-100 transform group-hover:-translate-y-1 transition-all duration-300">
                        查看演示视频
                      </span>
                    </div>
                  </a>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold mb-2 group-hover:text-green-500 transition-colors">英语口语Agent</h3>
                  <p className="text-sm text-gray-600">基于生成式AI的英语口语助手，支持中文到地道英语转化及雅思训练。</p>
                </div>
              </div>
            </div>

            {/* Coze知识库插件 */}
            <div className="snap-center shrink-0">
              <div className="w-[300px] bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="aspect-video relative bg-gradient-to-br from-purple-50 to-gray-50">
                  <a href="https://www.bilibili.com/video/BV1RVL7zhEvs/" target="_blank" className="block w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="/project-preview-coze.png"
                        alt="Coze知识库插件预览"
                        width={300}
                        height={169}
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                      <span className="absolute px-4 py-2 bg-purple-500 text-white text-sm rounded-full opacity-0 group-hover:opacity-100 transform group-hover:-translate-y-1 transition-all duration-300">
                        查看使用演示
                      </span>
                    </div>
                  </a>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold mb-2 group-hover:text-purple-500 transition-colors">Coze知识库导入插件</h3>
                  <p className="text-sm text-gray-600">Chrome扩展实现网页内容到Coze知识库的自动化导入及问答功能。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 社团与组织经历 */}
        <section className="mb-12 overflow-hidden">
          <h2 className="text-lg font-bold mb-6 flex items-center after:content-[&apos;&apos;] after:h-[1px] after:flex-1 after:ml-4 after:bg-gray-200">社团与组织经历</h2>
          <div className="flex overflow-x-auto pb-6 gap-6 snap-x snap-mandatory">
            {/* 学生会经历 */}
            <div className="snap-center shrink-0 first:pl-4 last:pr-4">
              <div className="w-[400px] h-[500px] bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-50">
                  <h3 className="text-base font-bold sticky top-0 bg-white pb-2">
                    学生会
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">主席 | 2019.03-2020.03</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">项目管理</h4>
                      <p className="text-sm text-gray-600">通过访谈调研，筛选热门主题，策划并执行校级运动会、市级辩论赛、省级合唱比赛等10+项大型活动，从策划撰写、活动宣发到场布布置、人员调度、危机情况处理，再到后期总结反馈，全程把控。场均参与人数2000+，爱心义卖筹集捐款10w+</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">资源统筹</h4>
                      <p className="text-sm text-gray-600">寻找潜在赞助商，协调学校各方资源，与学校行政、教务部门保持沟通，争取项目支持，兼顾赞助方利益，策划获8场赞助，任期内总赞助额达11w+突破记录，场均赞助最高4w+</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">成员招募</h4>
                      <p className="text-sm text-gray-600">主导优化组织架构和部门设置，进行成员的招募和培养，开展成员培训；梳理学生会工作流程，简化活动审批流程，提高效率</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 校辩论队经历 */}
            <div className="snap-center shrink-0">
              <div className="w-[400px] h-[500px] bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-50">
                  <h3 className="text-base font-bold sticky top-0 bg-white pb-2">
                    校辩论队
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">队员 | 2019.03-2020.03</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">语言表达</h4>
                      <p className="text-sm text-gray-600">快速拆解议题，梳理逻辑关系，构建论证体系；参与多场校级辩论、模拟联合国（获最佳代表）、及联校辩论（获最佳辩手）</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">团队协作</h4>
                      <p className="text-sm text-gray-600">充分理解团队的辩论战术和策略，明确自己的任务和角色，与队友密切配合，根据团队需要，适时调整辩论方式和重点</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 证书/技能及其他 */}
        <section className="mb-12">
          <h2 className="text-lg font-bold mb-6 flex items-center after:content-[&apos;&apos;] after:h-[1px] after:flex-1 after:ml-4 after:bg-gray-200">证书 / 技能及其他</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 数据分析软件 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-bold mb-3 text-blue-600 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18"/>
                  <path d="m19 9-5 5-4-4-3 3"/>
                </svg>
                数据分析软件
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">SQL</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Tableau</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">SPSS</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Stata</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Sas</span>
              </div>
            </div>

            {/* PM相关软件 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-bold mb-3 text-purple-600 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                  <polyline points="10 17 15 12 10 7"/>
                  <line x1="15" y1="12" x2="3" y2="12"/>
                </svg>
                PM相关软件
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm">Figma</span>
                <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm">墨刀</span>
                <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm">Axure</span>
                <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm">ProcessOn</span>
                <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm">Xmind</span>
              </div>
            </div>

            {/* 工作软件 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-bold mb-3 text-green-600 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.29 7 12 12 20.71 7"/>
                  <line x1="12" y1="22" x2="12" y2="12"/>
                </svg>
                工作软件
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm">Excel</span>
                <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm">PowerPoint</span>
                <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm">Word</span>
                <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm">PS</span>
                <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm">PR</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
