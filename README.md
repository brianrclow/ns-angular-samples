# ns-angular-samples

This monorepo serves as a learning resource for NativeScript Angular concepts and ideas. The sample apps are listed below for reference. The goal would be to have a repo that demonstrates various features of NativeScript using the Angular flavor.

#

## Apps

- [screenshot-share](https://github.com/brianrclow/ns-angular-samples/tree/main/apps/nativescript-screenshot-share) - convert a view to an image and share it
- [image-cache](https://github.com/brianrclow/ns-angular-samples/tree/main/apps/nativescript-image-cache) - cache images downloaded to device
- [labels](https://github.com/brianrclow/ns-angular-samples/tree/main/apps/nativescript-labels) - demonstrates various features of labels

#

## Usage

This mono repo can run all apps from root: `nx run <application-name>:<platform>`

See app specific README files for exact commands.

#

## Resources

- [Official Plugins Docs](https://docs.nativescript.org/plugins/index.html)
- [Official Plugins Github](https://github.com/NativeScript)
- [Community Plugins Docs](https://nativescript-community.github.io)
- [Community Plugins Github](https://github.com/nativescript-community/)
- [nStudio Plugins Github](https://github.com/nstudio/nativescript-plugins)
- [Triniwiz Plugins Docs](https://triniwiz.github.io/nativescript-plugins/api-reference/)
- [Triniwiz Plugins Github](https://github.com/triniwiz/nativescript-plugins)
- [Youtube Videos using #iscriptnative](https://www.youtube.com/hashtag/iscriptnative)

#

## Project Info/Maintenance:

Generate a new app in monorepo: `nx generate app`

Update the dependencies: `nx migrate latest` then `nx migrate --run-migrations`

This project was generated using [Nx](https://nx.dev) and also uses [xplat](https://nstudio.io/xplat).
