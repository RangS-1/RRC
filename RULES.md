# Rules

Welcome to the rules page. In here, you will be understand how to make a good template and contribution to this project. Let's start with basic rules.

## Basic

There's templates folder on this project, that's where you put your template. For now, there's 7 categories. 

1. CLI
2. Desktop
3. Gamedev
4. Script
5. Static
6. System
7. Web

## CLI

Check the cli folder, can you see it? there's python in it. If you want to make template for cli and using another programming language, the structure must be:

```bash

cli/
└── python
└── rust

```

Use a good folder structure for the template!

## Desktop

Here's the tricky part, i'm still didn't know where to start for desktop app, maybe you can make pull request for it? Ah yes, the structure must be like CLI.

## GameDev

On Gamedev folder, you must categorize gamedev template with its engine, for example you want to make basic template for godot, you can make the structure like:

```bash
gamedev/
├── godot/
├   └── basic
├   └── platformer
├── love2d/
├   └── basic
└── └── platformer
```

You must use a good structure for game engine. basicly use a folder like assets, sprites, logic, etc...

## Script

In this folder, you can just add a script without a folder structure, like this pyproject.toml.

```bash
script/
└── pyproject.toml
└── script.tml?Idunno
```

## Static

There's 3 more sub domain in static folder. such as:

### blog

The blog folder contain any static site that can be made for static blog. You must use number on the folder and use kebab-case. See this structure:

```bash
blog/
└── 1-default
└── <number>-<yourtemplatename>
```

First thing more important is, you need to add sitemap.xml and robots.txt. The structure must be look like this:

```bash
1-default
└── ...
└── index.html
└── sitemap.xml
└── robots.txt
```

### documentation

There's not much on this folder. Most important thing is you must add sitemap.xml and robots.txt, just like on blog. In the documentation, homepage is optional.

### landing-page

Just like the name, it was a landing page for your project like a portfolio or a redirect site to your social media. The folder structure must be like blog.

## System

On the system folder, you can make anything that can be used to be a template for a system. Example, on linux, you can make package template for the operating system such as arch, debian, and fedora.

## Web

On web folder, you can make a template with their side, like front-end, back-end, or even fullstack. Example:

```bash
web/
└── front-end/
└   └── react   # for react component
└── back-end/
└── fullstack/
└── └── laravel
```

## Quote for contributor

Please, use a structured template.