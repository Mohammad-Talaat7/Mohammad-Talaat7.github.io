---
layout: post
title:  "Arch Linux Installation Guide"
---
For decades, *Windows* and *macOS* have dominated the personal computing landscape, powering everything from office workstations to creative design hubs.

Microsoft’s Windows, with its user-friendly interface and broad software compatibility, controls nearly **75%** of the desktop OS market, making it the default choice for most users.

On the other hand, Apple’s macOS, known for its sleek design and seamless ecosystem, dominates the creative and professional sectors, especially among developers and designers.

While these operating systems offer convenience, they come with limitations—proprietary restrictions, bloated software, and lack of customization.
For AI/ML developers, these constraints can be frustrating when dealing with performance-critical tasks, hardware optimization, and open-source tooling.

## Enter Linux: The Power of Freedom

Unlike Windows and macOS, *Linux* is a free, open-source operating system built on the principles of transparency and user control.

Created by [**Linus Torvalds**](https://en.wikipedia.org/wiki/Linus_Torvalds) in 1991 as a hobby project, Linux has since grown into a powerhouse, running on everything from smartphones (Android) to supercomputers.

Its modular nature allows users to tailor their systems precisely to their needs—making it a favorite among developers, sysadmins, and tinkerers.

## Why Use Arch Linux for AI/ML Development?

Among Linux distributions, *Arch Linux* stands out for its minimalist, DIY approach.
Unlike *Ubuntu* or *Fedora*, which come preconfigured, *Arch* gives you complete control over what gets installed—leading to a lean, optimized system perfect for AI/ML workloads.

### Pros of Arch Linux for AI/ML

- **Lightweight & Fast** – No unnecessary background processes, maximizing hardware efficiency. 
- **Rolling Release Model** – Always up-to-date with the latest software (*CUDA*, *PyTorch*, *TensorFlow*).
- **AUR (Arch User Repository)** – Easy access to thousands of bleeding-edge AI/ML tools.
- **Full Customization** – Optimize your system for GPU acceleration (*NVIDIA*/*AMD*) without bloat.
- **Better Hardware Control** – Fine-tune kernel parameters for performance gains in deep learning.

### Cons of Arch Linux for AI/ML

- **Steeper Learning Curve** – Requires manual setup (but worth it for power users).
- **No Hand-Holding** – You must troubleshoot issues yourself (great for learning).
- **Potential Instability** – Rolling updates can sometimes break dependencies (fixable with caution).

## Getting Ready

Now after we learned about Arch and it's pros and cons, let's understand how we can actually install and use it:

### Getting our Live-USB

At first we need an empty usb to write the system on it, then download the suitable iso file from [Arch Linux Downloads](https://archlinux.org/download/)

Then we can use [BalenaEtcher GUI Tool](https://etcher.balena.io/) or any available tool to create the live USB, it's a simple process so we wouldn't talk much about it.

### Updating Packages

Before actually installation we can make sure that everything is updated (Crucial Part) using `pacman -Sy` then `pacman -S archinstall`.

If you wonder what we just did now and what does a classic arcade game (Pac-Man) doing here, then let me explain something called *Package Manager*.

## What is a Package Manager?

Imagine you’re building a house.
Instead of cutting every piece of wood, mixing cement, and forging nails yourself, you’d rather get pre-made materials delivered to you—saving time and effort.

A *Package Manager* does exactly that for software. It:

- **Downloads** programs (called packages) from online repositories.
- **Installs** them with all necessary dependencies (other required software).
- **Updates** everything with a single command.
- **Removes** software cleanly when you don’t need it.

to but it in simple terms without a package manager, you’d have to manually download software from websites, deal with missing dependencies, and even struggle to uninstall programs completely

## Actual Installation

Now after learning about package managers let's use ours to install some important packages for sound without them in some cases the installation of arch linux gets interubted:

```bash
pacman -S pipewire wireplumber pipewire-pulse pipewire-alsa
```

Also we need to enable their services with:

```bash
systemctl --user enable --now pipewire.service wireplumber.service pipewire-pulse.service
```

Now we are ready to install our beloved linux using `archinstall`.

Now just follow the installation and tweak it to your needs (That's the beauty of freedom).

## Post Installation

After finishing installation and rebooting we can now interact with our brand new operating system (whether you choose to use Hyprland or GNOME, Welcome to Arch!)

Now if you are wondring how can I actually connect to my WiFi the answer is simple just enter `sudo nmcli --ask dev wifi connect "SSID"` in your terminal while replacing `SSID` with your network's name.

You can also install some key packages like:

```bash
sudo pacman -S git firefox waybar rofi swaync code
```

Now Enjoy your jeorney in open-source world!
