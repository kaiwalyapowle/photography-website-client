import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./components/admin/admin.component";
import { UserviewComponent } from "./components/userview/userview.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { EmailComponent } from "./components/email/email.component";

const routes: Routes = [
  { path: "", component: UserviewComponent },
  { path: "resourcemanager", component: AdminComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "gallery/:panel", component: GalleryComponent },
  { path: "testEmail", component: EmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
