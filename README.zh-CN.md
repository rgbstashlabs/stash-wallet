# Stash Wallet

[English](./README.md) | **中文**

Stash Wallet 是一款支持**比特币**、**RGB** 与**闪电网络**的简洁资产钱包，覆盖 Chrome 扩展、iOS 和 Android。你可以在同一个应用中管理 BTC 与 RGB 资产、进行闪电支付，并通过 Market 查看项目与参与兑换相关操作。

- 官网：<https://stashlabs.io/stash-wallet/>
- 文档：<https://docs.stashlabs.io/zh/stash-wallet/>
- 下载：<https://github.com/rgbstashlabs/stash-wallet/releases>

## 核心特点

- 🔐 **同一份助记词，多端通用**：在 Chrome 扩展、iOS 与 Android 导入同一份助记词，即可在多个端管理你的资产
- 👛 **创建或导入钱包**：支持创建新钱包，也支持用你自己离线保管的助记词恢复钱包
- 🪙 **链上收发比特币**：在链上收发 BTC、查看活动记录，并管理 UTXO 与 RGB 载体
- 🎨 **RGB20 资产管理**：添加、接收、发送 RGB20 资产
- ⚡ **闪电网络收发**：节点与通道就绪后，可通过闪电路径收发 BTC 与 RGB
- 🏛️ **Market 参与入口**：查看项目、参与 Fair Mint / 拍卖，或进行兑换相关操作
- 🧩 **节点与通道自主掌控**：管理节点与通道；可将云节点迁出到自托管（需同时备份节点数据，且无法再恢复到云节点）

## 安装指南

Stash Wallet 支持 Chrome 扩展、iOS 和 Android。部分渠道可能仍处于测试或受邀访问阶段，若页面提示不可用，请稍后重试或关注官方更新。

### Chrome 扩展

当前版本通过 GitHub 发布页下载安装：

1. 打开 [Stash Wallet 发布页](https://github.com/rgbstashlabs/stash-wallet/releases)，在最新 Release 的附件中下载扩展压缩包（`stash-wallet-v*.zip`，不要下载 “Source code” 源码包）
   也可从官网 [Stash Wallet](https://stashlabs.io/stash-wallet/) 进入同一发布页
2. 将压缩包解压到一个不会删除的固定目录（解压后根目录应直接包含 `manifest.json`）
3. 在 Chrome 地址栏打开 `chrome://extensions/`，开启右上角 **开发者模式**
4. 点击 **加载已解压的扩展程序**，选择第 2 步解压出的目录
5. 浏览器工具栏出现 Stash 图标即表示安装成功

> **提示**：可点击工具栏拼图图标，将 Stash Wallet 固定到工具栏，方便随时打开。
>
> **注意**：加载解压目录安装的扩展依赖该目录，请勿删除或移动；升级时下载新版本压缩包并重新加载即可。

### iOS（暂未开放）

通过 Apple 官方的 **TestFlight** 安装测试版。

> **关于 TestFlight**：无需越狱或电脑侧载。若邀请链接提示暂不接受新测试员，说明当前名额有限，请等待后续开放。

前往 [iOS 安装页面](https://stashlabs.io/install/ios/) 获取最新邀请，并按以下步骤操作：

1. **安装 TestFlight**：在 iPhone 上打开 App Store，安装 Apple 的 TestFlight
2. **打开邀请**：在 iPhone 上点击安装页的 **Open in TestFlight**（或在 Safari 中打开同一链接）
3. **接受并安装**：在 TestFlight 中点击 **Accept**，再点击 **Install**
4. **启动应用**：从主屏幕打开 Stash Wallet。后续更新可在 TestFlight 中完成

### Android（暂未开放）

通过官方页面下载 APK 安装。

前往 [Android 安装页面](https://stashlabs.io/install/android/)，确认页面网络/版本标识符合你的需求后下载：

1. **下载 APK**：点击 **Download APK**。若按钮显示不可用，表示该版本尚未发布或暂时下架
2. **打开安装包**：从通知栏或「文件 / 下载」中打开 APK
3. **允许未知来源**：首次安装时按系统提示开启「允许来自此来源的安装」。常见路径示例：
   - **三星**：设置 → 应用 →（右上角菜单）→ 特殊访问权限 → 安装未知应用
   - **小米**：设置 → 隐私保护 → 特殊权限 → 安装未知应用
   - **OPPO**：设置 → 安全 → 安装外部来源应用
   - **vivo**：设置 → 更多设置 → 权限管理 → 安装未知应用
   - **华为**：设置 → 安全 → 更多设置 → 安装外部来源应用
4. **完成安装**：点击安装，完成后打开 Stash Wallet

## 安装后建议

1. 创建或导入钱包，并离线备份助记词
2. 确认当前网络与节点状态
3. **完整备份**：日常请保管好助记词；将云节点迁出到自托管时，需要同时备份节点数据，并且无法再恢复到云节点

安装完成后，请前往 [创建与导入钱包](https://docs.stashlabs.io/zh/stash-wallet/wallet-setup)。

## 基础设施说明

以下能力会依赖节点与相关基础设施：

- **[RGB 闪电网络节点](https://bitlightlabs.com/lightning)**：提供闪电通道、支付以及 RGB 在闪电路径上的处理能力
- **[Stash Cloud](https://docs.stashlabs.io/zh/stash-cloud/)**：提供云节点基础设施，便于你获得可用的 RGB 闪电网络节点

## 使用提示

- **先核对网络**：测试币没有真实价值；收付款双方须在同一网络
- **先确认节点可用**：钱包已解锁，不等于节点一定已就绪
- **谨慎确认每一笔操作**：区块链与闪电支付在多数情况下难以撤销
- **完整备份**：详见 [安装后建议](#安装后建议)

## 面向 DApp 开发者

将 Stash Wallet 集成到 DApp 无需扩展源码，使用官方 SDK 即可：

- SDK 仓库：<https://github.com/rgbstashlabs/stash-wallet-sdk>
- SDK 文档：<https://docs.stashlabs.io/zh/stash-wallet/sdk/>

## 文档目录

- [概览](https://docs.stashlabs.io/zh/stash-wallet/)
- [安装指南](https://docs.stashlabs.io/zh/stash-wallet/installation)
- [创建与导入钱包](https://docs.stashlabs.io/zh/stash-wallet/wallet-setup)
- [收发比特币](https://docs.stashlabs.io/zh/stash-wallet/send-receive)
- [RGB 资产管理](https://docs.stashlabs.io/zh/stash-wallet/rgb-assets)
- [闪电网络](https://docs.stashlabs.io/zh/stash-wallet/lightning-swap)
- [节点](https://docs.stashlabs.io/zh/stash-wallet/node)
- [设置与安全](https://docs.stashlabs.io/zh/stash-wallet/settings-security)

## 许可证

Stash Wallet 基于 Apache License 2.0 发布，详见本仓库 `LICENSE`。
