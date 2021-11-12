# ns-angular-samples

This monorepo serves as a learning resource for NativeScript Angular concepts and ideas. The sample apps are listed below for reference. The goal would be to have a repo that demonstrates various features of NativeScript using the Angular flavor.

#

### Apps

- [screenshot-share](https://github.com/brianrclow/ns-angular-samples/tree/main/apps/nativescript-screenshot-share) - convert a view to an image and share it
- [image-cache](https://github.com/brianrclow/ns-angular-samples/tree/main/apps/nativescript-image-cache) - cache images downloaded to device

#

### Project Info/Maintenance:

Generate a new app in monorepo: `nx generate app`

Update the dependencies: `nx migrate latest` then `nx migrate --run-migrations`

This project was generated using [Nx](https://nx.dev) and also uses [xplat](https://nstudio.io/xplat).
