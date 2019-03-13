import { Provider } from "@angular/core";

import { LoginViewComponent } from "./login-view/login-view.component";
import { ChangePassComponent } from "./change-password/change-password.component";

export const COMPONENTS: Provider[] = [LoginViewComponent, ChangePassComponent];
