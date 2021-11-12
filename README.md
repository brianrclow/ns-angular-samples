# ns-angular-samples

This monorepo serves as a learning resource for NativeScript Angular concepts and ideas. The sample apps are listed below for reference. The goal would be to have a repo that demonstrates various features of NativeScript using the Angular flavor.

- [screenshot-share](https://github.com/brianrclow/ns-angular-samples/tree/main/apps/nativescript-screenshot-share) - convert a view to an image and share it
- [image-cache](https://github.com/brianrclow/ns-angular-samples/tree/main/apps/nativescript-image-cache) - cache images downloaded to device


### Each App should have:
* Clear purpose
* Documented Readme with screenshots and resource links
* Basic app icon and launch screen
* Cleaned up and documented code

TODO:

- Move remaining sample applications to monorepo and begin better codesharing process using xplat.
  - bottom-sheet, checkbox-test, quick-action

Ideas:

- [ ] Accordion View (Simple dropdown style w/animated content expanding)
- [ ] Infinity Scroll (Scroll to bottom of screen loads more)
- [ ] Address Fields/autocomplete
- [ ] Programmatically change tabs and then navigate
- [ ] Different styles dialog boxes (both native and custom)
- [ ] Different snackbar/pop-downs
- [ ] Different bottom sheets (both native and custom)
- [ ] Different Video Solutions (video-player and exo-player plugins)

Project Details:

This project was generated using [Nx](https://nx.dev) and also uses [xplat](https://nstudio.io/xplat).

To generate a new app in monorepo: `nx generate app`