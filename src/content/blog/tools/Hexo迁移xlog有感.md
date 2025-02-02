---
title: Hexo 迁移 xLog 有感
link: hexo-migration-xlog-notes
catalog: true
lang: cn
date: 2023-04-05 17:46:14
tags:
  - hexo
  - xLog
categories:
  - 工具
---

最近，我决定把我的 Hexo 博客转移一部分到 xLog，并在这上面进行写作 ，因为它很酷，且技术栈也很新！

> xLog 是一个基于区块链的开源博客系统，使用 Next.js + Tailwind CSS + TypeScript + TanStack Query 构建，所有博客数据都由用户签名并存储在区块链上，以 NFT 的形式存在。

原 Hexo 链接👉[https://ysx.cosine.ren/](https://ysx.cosine.ren/)
我的 xLog 链接👉[https://cosine.xlog.app/](https://cosine.xlog.app/)

搭建过程可以看看这篇文章👉[https://song.xlog.app/5m-zh](https://song.xlog.app/5m-zh) ，老 web3 人就好办了，直接一连钱包，进入仪表盘，over

## 起因

这个想法的起因是看到了这篇文章：[https://diygod.me/xlog](https://diygod.me/xlog)，作者 diygod 介绍了 xLog 的优缺点和使用方法，而我既然是 web3 从业者自然对链上博客有着很高的兴趣，于是前来体验一番。
还有一点就是这个博客的技术栈与我爱用的技术高度接近，都是 Next.js + Tailwind CSS + TypeScript + TanStack Query，clone 了仓库发现还有 prisma，赞许！

> ps：我很喜欢她的签名 “写代码是热爱，写到世界充满爱！”

## 优点

引用博文里的目的，我觉得确实做到了，我个人非常喜欢它的设计理念和实现方式。

> 我的个人博客已经运行了接近 9 年，跟着我慢慢发展，现在几乎已经成为了我的个人发展史，折腾博客也从很久以前就成为了我的一个爱好，但随着对 Hexo 的越来越不满，我决定做一个更现代化的全新的博客系统。
> 我不想仅仅满足自己的需要，它需要开源和足够开放，来满足更多人的需求。
> 我不想让我珍贵的数据被中心化平台绑架，又不想麻烦维护一个数据库或服务器，它需要兼顾数据所有权和便利，所以我选择了区块链。
> 最后，它需要使用较新的技术栈，提供一个更好的开发和维护体验。

优点也大抵如下：

- **开源**、**开源**、**开源**！
- **去中心化**、安全、简洁开放、界面好看
- 现代化、技术栈很新，作者一直在维护，每天都有提交
- 随意定制、一键部署，甚至不需要自己的域名（当然，也可绑定自定义域名）
- 导入导出非常方便，对 markdown 的支持度极高，甚至导入之前 hexo 的文章时时间都不用改，会识别 formatter
- 没有摘要时，在访问文章的时候提供 AI 生成摘要（懒得写摘要星人有救了！）
- 我爱 Tailwind（振声）
- 当我打开设置页面的时候，我看到了 Google Analysis，贴心！

> 将 Google Analytics 集成到你的站点中。你可以按照 [这里](https://support.google.com/analytics/answer/9539598) 的说明查找你的 Measurement ID。

- 影子授权：可以授权其他人进入自己的仪表盘，更改设置 or 发布文章等

![image](https://xlog.app/_next/image?url=https%3A%2F%2Fipfs.4everland.xyz%2Fipfs%2Fbafkreigybz3zg4yole2vvuxnasfovts7zevkatnyr7c2o2flare7qa4ygm&w=3840&q=75)

- 图片上传至 IPFS：很 web3，图床都省了，截图过来直接上传（注意隐私别泄露就好）
- web3 版**一键三连**：点赞、收藏、赞赏 ->爱它，就把它的文章铸造成 nft 收藏喵
- ~~官方很可爱，这个作者我也很早就对她的 RSSHub 有所耳闻~~

## 不足 & 建议

现在的 xLog 也还有一些缺点，因为还在不断完善中，所以可能暂时不作为主力博客，但是听说目前的开发团队就一个人，期待看到更加完善的 xlog

一些我个人体验到的及官方说明了的缺点如下：

- 文章的批量操作暂时欠缺
  - 如当我导入失误想批量删除文章时，我发现并不能很快的完成这个操作
  - 等支持了，我第一时间把之前尝试导入的时候格式坏掉了的博客删了 QAQ
- 我所有的操作都可以在官网的 [最新动态](https://xlog.app/activities) 里看到
  - 好的一方面是文章会有很多人看到
  - 不太好的一方面是，虽然不能真正删除，但是有没有可能出个在官方动态隐藏自己某个文章的功能？
    > 毕竟当正在迁移的时候，官方最新页突然出现一大堆自己的文章还是很惊悚的
    > 或者增加排序规则的选择？现在大概是用交易的日期排的序而不是文章的日期
- 文章编辑器体验有待提升，虽然大部分时间都是本地编辑好 md 粘贴过来或者直接导入
  - 期望编辑器内能也预览目录
  - 或许插件系统出了后会有很多改善
- 暂时不支持分类功能，只能使用标签来组织文章？
- 暂时不支持搜索功能，可能得借助第三方服务？
- 文章的格式还有一些不太支持，期待一下未来的主题 & 插件系统
  - 比如 markdown 解析器的插件~
- 有没有可能删除自己的角色呢？如我一开始选了个错误的句柄，很想删掉而不是切换角色（

## 结语

最后，几乎所有涉及到面向大众的 web3 文章的结语都会表达出对这个领域的投机者的不满，不厌其烦地解释 web3 不只有疯狂的投资者和韭菜。web3 是一个有趣而富有挑战的领域，它有很多潜力，也有很多问题。不要忽视了 web3 对于互联网和社会的深刻变革，也不要轻视了 web3 中那些真正有创造力和远见的人。

贴一下上文搭建博客的教程中所说的部分文摘

> 你或许想说，区块链、IPFS、Web3，这些词汇听起来离我们普通用户很遥远，甚至经常与虚无缥缈的骗子「币圈」画等号。但实际上，在这个领域，投机者只是喧嚣的那一部分，我们应该看到有更多真正为「Web3 理想」而奋斗的人们和他们在做的事情。而作为完全开源并且专注于 Web3 数据由用户掌控的社交生态产品，Crossbell 区块链和 xLog 就是其中的一员

关于 Gas 费，有水龙头可以免费领，但我对这段话很感兴趣。

> 正如在现实中活动需要金钱，在区块链上进行活动（交易）需要手续费。Crossbell 区块链的手续费是 $CSB。你可能想问，为什么 Web2 网站不需要费用来活动？答案是你的「数据隐私」在不经意间已经被作为替代费用交易了。

贴一些值得阅读的文章，或许可以给感兴趣的人一个了解 web3 的渠道，**解释由 chat 生成，不保证准确**

- [What is Web3? The Decentralized Internet of the Future Explained](https://www.freecodecamp.org/news/what-is-web3/) 这篇文章详细地讲述了 web3 的发展历史和未来愿景，以及它如何解决 web2 中的一些问题，比如数据隐私、中心化和垄断。它还提供了一些 web3 的实际案例和资源，帮助读者更好地理解和参与 web3。
- [The Path to Web3](https://thegraph.com/blog/the-path-to-web3/) 这篇文章讲述了 web3 的发展历史和未来愿景，以及它如何解决 web2 中的一些问题，比如数据隐私、中心化和垄断。它还介绍了 The Graph 这个项目，它是一个用于查询区块链网络数据的索引协议，可以让开发者和用户更容易地构建和使用去中心化应用（DApp）。它还展望了 The Graph 的未来计划，包括支持更多的区块链网络、增加社区参与和治理等。
- [Web3 DApp 最佳编程实践指南](https://guoyu.mirror.xyz/RD-xkpoxasAU7x5MIJmiCX4gll3Cs0pAd5iM258S1Ek) 这篇文章是一份 Web3 DApp 开发的最佳实践指南，作者是著名的程序员郭宇，他分享了他在 CodeforDAO 和 Checks Finance 两个项目中遇到的问题和解决方案。他介绍了一些 Web3 DApp 开发的基本概念，比如区块链、智能合约、钱包、DApp、去中心化协议等。他还提供了一些 Web3 DApp 开发的工具和资源，比如编程语言、框架、库、测试、部署、监控等。他的目的是帮助更多的工程师转向 Web3，并为 Web3 的长远发展做出贡献。

> 感谢你阅读这篇文章，希望你能从中获得一些有用的信息和启发。如果对我的文章有任何建议或批评，欢迎在评论区留言或者通过邮件联系我。我很乐意听取反馈和想法，祝生活愉快！
