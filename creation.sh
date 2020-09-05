# npm install -D @nrwl/angular
# nx g @nrwl/angular:app agromanager
# nx g @nrwl/angular:lib --directory=ui-kits main
# npm install -D firebase @angular/firebase
# npm install -D @angular/material
# npm install -D @twittwer/compodoc
# npm install -D @nrwl/storybook

# nx g @nrwl/angular:lib --directory=feature/lazy home --routing --parentModule=apps/agromanager/src/app/app.module.ts --lazy
# nx g @nrwl/angular:component home-page --project=feature-lazy-home --style=scss
# nx g @nrwl/angular:lib --directory=feature/lazy login --routing --parentModule=apps/agromanager/src/app/app.module.ts --lazy
# nx g @nrwl/angular:component login-page --project=feature-lazy-login --style=scss
# nx g @nrwl/angular:lib --directory=feature/lazy about --routing --parentModule=apps/agromanager/src/app/app.module.ts --lazy
# nx g @nrwl/angular:component about-page --project=feature-lazy-about --style=scss
# nx g @nrwl/angular:lib --directory=feature/lazy help --routing --parentModule=apps/agromanager/src/app/app.module.ts --lazy
# nx g @nrwl/angular:component help-page --project=feature-lazy-help --style=scss
# nx g @nrwl/angular:lib --directory=feature/lazy settings --routing --parentModule=apps/agromanager/src/app/app.module.ts --lazy
# nx g @nrwl/angular:component settings-page --project=feature-lazy-settings --style=scss
# nx g @nrwl/angular:lib --directory=feature/lazy profile --routing --parentModule=apps/agromanager/src/app/app.module.ts --lazy
# nx g @nrwl/angular:component profile-page --project=feature-lazy-profile --style=scss
# nx g @nrwl/angular:component header --project=ui-kits-main --style=scss --export

# nx g @nrwl/angular:component footer --project=ui-kits-main --style=scss --export
# nx g @nrwl/angular:component navbar --project=ui-kits-main --style=scss --export

# nx g @nrwl/workspace:lib data

# nx g @nrwl/angular:lib --directory=feature/api auth
# nx g @nrwl/angular:service auth --project=feature-api-auth
# nx g @nrwl/angular:guard auth --project=feature-api-auth

# nx g @nrwl/angular:lib --directory=feature/modules dashboard --routing
# nx g @nrwl/angular:component dashboard-page --project=feature-modules-dashboard --style=scss

# nx g @nrwl/angular:lib --directory=feature/modules animals --routing --parentModule=apps/agromanager/src/app/app.module.ts --style=scss
# nx g @nrwl/angular:component animals-page --project=feature-modules-animals --style=scss