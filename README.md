# Stash Wallet

**English** | [中文](./README.zh-CN.md)

Stash Wallet is a simple wallet for **Bitcoin**, **RGB**, and **Lightning**, available as a Chrome extension, an iOS app, and an Android app. Manage BTC and RGB tokens, make Lightning payments, and use Market to discover projects and perform swap-related actions — all from one app.

- Website: <https://stashlabs.io/stash-wallet/>
- Documentation: <https://docs.stashlabs.io/en/stash-wallet/>
- Downloads: <https://github.com/rgbstashlabs/stash-wallet/releases>

## Highlights

- 🔐 **One mnemonic, every platform** — Import the same mnemonic in the Chrome extension, iOS, and Android to manage your assets across devices
- 👛 **Create or import a wallet** — Create a new wallet, or restore one from a mnemonic you keep offline yourself
- 🪙 **On-chain BTC** — Send and receive Bitcoin on-chain, review activity, and manage UTXOs and RGB carriers
- 🎨 **RGB20 assets** — Add, receive, and send RGB20 assets
- ⚡ **Lightning** — Send and receive BTC and RGB over Lightning once the node and channels are ready
- 🏛️ **Market access** — Discover projects, join Fair Mint / auctions, or perform swap-related actions
- 🧩 **Your own node and channels** — Manage nodes and channels, and migrate a cloud node to self-hosting when needed (back up node data as well — you cannot restore it back to a cloud node)

## Installation

Stash Wallet supports the Chrome extension, iOS, and Android. Some channels may still be in testing or invite-only access; if a page says the build is unavailable, retry later or watch for official updates.

### Chrome Extension

The current build is distributed as a release archive:

1. Open the [releases page](https://github.com/rgbstashlabs/stash-wallet/releases) and download the extension archive from the latest release: pick the asset named `stash-wallet-v*.zip`, not the `Source code` archives
   You can also reach the same releases page from the official [Stash Wallet](https://stashlabs.io/stash-wallet/) page
2. Unzip the archive into a permanent folder (the archive root already contains `manifest.json`)
3. Open `chrome://extensions/` in Chrome and enable **Developer mode** in the top-right corner
4. Click **Load unpacked** and select the folder from step 2
5. The Stash icon in the toolbar means the installation succeeded

> **Tip**: Use the puzzle-piece menu to pin Stash Wallet to the toolbar for quick access.
>
> **Note**: An unpacked extension depends on that folder — do not delete or move it. To upgrade, download the new release archive and load it again.

### iOS (Not yet available)

Install the beta through Apple's official **TestFlight**.

> **About TestFlight**: No jailbreak or computer sideload is required. If the invite says new testers are not accepted, capacity is limited — please wait for a wider release.

Go to the [iOS install page](https://stashlabs.io/install/ios/) for the latest invite:

1. **Install TestFlight** from the App Store on your iPhone
2. **Open the invite** with **Open in TestFlight** (or open the same link in Safari)
3. **Accept and Install** in TestFlight
4. **Launch** Stash Wallet from the home screen. Updates continue through TestFlight

### Android (Not yet available)

Download the APK from the official page.

Go to the [Android install page](https://stashlabs.io/install/android/), confirm the network/version label matches your need, then download:

1. **Download the APK** with **Download APK**. If the button is unavailable, that build is not published yet
2. **Open the package** from notifications or Files / Downloads
3. **Allow unknown sources** when prompted. Common paths:
   - **Samsung**: Settings → Apps → (menu) → Special access → Install unknown apps
   - **Xiaomi**: Settings → Privacy protection → Special permissions → Install unknown apps
   - **OPPO**: Settings → Security → Install from external sources
   - **vivo**: Settings → More settings → Permission management → Install unknown apps
   - **Huawei**: Settings → Security → More settings → Install apps from external sources
4. **Install**, then open Stash Wallet

## After You Install

1. Create or import a wallet, and back up the mnemonic offline
2. Confirm the current network and node status
3. Keep a full backup: keep the mnemonic for daily recovery; when migrating a cloud node to self-hosting, also back up node data — you cannot restore it back to a cloud node

See [Wallet Setup](https://docs.stashlabs.io/en/stash-wallet/wallet-setup) for the next steps.

## Infrastructure

These capabilities depend on nodes and related infrastructure:

- **[RGB Lightning Node](https://bitlightlabs.com/lightning)** — Lightning channels, payments, and RGB over Lightning
- **[Stash Cloud](https://docs.stashlabs.io/en/stash-cloud/)** — cloud node infrastructure, so you can obtain a usable RGB Lightning node

## Tips

- **Check the network first** — test coins have no real value; both parties must use the same network
- **Confirm the node is ready** — an unlocked wallet does not always mean the node is ready
- **Review every confirmation carefully** — blockchain and Lightning payments are hard to reverse in most cases
- **Back up completely** — see [After You Install](#after-you-install)

## For dApp Developers

Integrating Stash Wallet into a dApp does not require the extension source. Use the official SDK:

- SDK repository: <https://github.com/rgbstashlabs/stash-wallet-sdk>
- SDK docs: <https://docs.stashlabs.io/en/stash-wallet/sdk/>

## Documentation

- [Overview](https://docs.stashlabs.io/en/stash-wallet/)
- [Installation](https://docs.stashlabs.io/en/stash-wallet/installation)
- [Wallet Setup](https://docs.stashlabs.io/en/stash-wallet/wallet-setup)
- [Send & Receive BTC](https://docs.stashlabs.io/en/stash-wallet/send-receive)
- [RGB Assets](https://docs.stashlabs.io/en/stash-wallet/rgb-assets)
- [Lightning](https://docs.stashlabs.io/en/stash-wallet/lightning-swap)
- [Node](https://docs.stashlabs.io/en/stash-wallet/node)
- [Settings & Security](https://docs.stashlabs.io/en/stash-wallet/settings-security)

## License

Stash Wallet is released under the Apache License 2.0. See `LICENSE` in this repository.
