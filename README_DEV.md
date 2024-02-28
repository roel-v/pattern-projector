# Setting up a local development environment

- Install Node.JS and git, either through your favorite package manager or by downloading them from nodejs.org and
  git-scm.com respectively. Make sure to have the installers add the installation directories to your PATH.
- Make a directory to download the source somewhere and open a command prompt there.
- Install yarn:

    npm install --global yarn

- Get the Pattern Projector source code with git:

    git clone https://github.com/Pattern-Projector/pattern-projector.git .

- Install all packages required for Pattern Projector:

    yarn

- Start development webserver:

    yarn dev

This will start a webserver on localhost:3000 . If you edit any files, the development website on localhost will
automatically reload.

# Workflow for contributions

If you want to help out, you can either look through to issue database to find bugs or features to work on, or open your
own issue to propose an improvement or feature.

Once you know what to program, log in to Github and create a fork of the project. Clone your fork locally like you did
in the description for getting your local development environment up and running.

Make a local git branch to work in:

    git checkout -b your-branch-name

Make your changes on this branch, then do

    git commit <all files you changed>
    git push

Then go to Github and create pull request (PR) from your branch.

Before creating a (PR), make sure to do

    yarn build

on your local machine to check that building the app still works.

Your PR will be picked up and reviewed before being merged into Pattern Projector proper.

# Doing translations

- Set up the development environment as described above.
- Look inside the 'messages' directory for translations per language. Edit or add a new one as required.

# Standalone version

## Local development



## Packaging and deployment

To run the packaging process and create an NSIS installer, do

    npm run build:electron.

This will create a .exe installer in the 'dist' directory.

### Debugging the packaging

After running the build:electron command, there is an executable in dist\win-unpacked that you can run straight away.

To test what goes into the installer, do:

    electron-builder --config electron-builder.json build --dir > debug.txt

Note that you will need to have electron-builder installed globally (or at least, electron-builder will have to be in
your PATH. Since the global package directory is most likely in your PATH already anyway, installing a global copy is
probably the easier. But then beware of having different versions in your local and global environments).

This will create the contents of what eventually will go into the installer in dist\win-unpacked.

To enable debugging for this, do

    set DEBUG=electron-builder

first.
