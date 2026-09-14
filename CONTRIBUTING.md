# Contributing Page

Welcome to Contributing Section, if you are interested with this project, take a time to read it. If not, then get out of here.

## Folder Structure
Here's folder structure to this project:

```bash
rrc/
├── docs/         
├── scripts/           
├── templates/            
│   ├── cli/
│   │   └── python
│   ├── desktop/
│   ├── gamedev/
│   │   ├── godot
│   │   └── love2d
│   ├── static/
│   │   ├── blog/
│   │   ├── documentation/
│   │   └── landing-page/
│   └── web/
│       ├── front-end
│       │   └── react
│       ├── back-end
│       └── fullstack
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

## Create Your Own Templates

To make your own templates, fork this repository to your github account then run the following command:

```bash
git clone https://github.com/<youraccount>/rrc.git
cd rrc
git branch <your-templates>
git checkout <your-templates>
```

After making your own templates on branch, just merge the branch to main branch.

```bash
git checkout main
git merge <your-templates>
```

Remember to push it to your fork repository on github by:

```bash
git push origin main
```

Go to your fork repository on github then just click create pull request. In your pull request, should add at least:

1. Screenshot of your template.
2. Describe the template you created.

Wait until it reviewed by maintainer, if maintainer approve the templates, congrats! you are a contributor now!

## Contribution Rules

There are several rules to contribute to this project.

1. Only make change on a specific type, example: you want to make a templates to Web. Then make the template on the folder

```bash
templates/web/<sub-domain>/<your-template>
```

2. Test before create a pull request.

## Thank You

Your contributions to open source, large or small, make great projects like this possible. Thank you for taking the time to contribute, or just read this contributing page.