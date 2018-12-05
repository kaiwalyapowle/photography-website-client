import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FetchFileComponent } from "./components/fetch-file/fetch-file.component";
import { UploadFileComponent } from "./components/upload-file/upload-file.component";
import { DetailsComponent } from "./components/details/details.component";
import { FileLoaderService } from "./services/file-loader.service";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AdminComponent } from "./components/admin/admin.component";
import { UserviewComponent } from "./components/userview/userview.component";
import { SlideshowComponent } from "./components/slideshow/slideshow.component";
import { BioComponent } from "./components/bio/bio.component";

import { CatalogueComponent } from "./components/catalogue/catalogue.component";
import { SubcatalogueComponent } from "./components/subcatalogue/subcatalogue.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { DataStoreService } from "./services/data-store.service";

import { MDBBootstrapModule } from "angular-bootstrap-md";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CustomNgMaterialModule } from "./custom-ng-material/custom-ng-material.module";
import { GalleryModalComponent } from "./components/gallery-modal/gallery-modal.component";
import "hammerjs";
import "mousetrap";
import { ModalGalleryModule } from "@ks89/angular-modal-gallery";

import { SlickModule } from "ngx-slick";
import { VideosComponent } from "./components/videos/videos.component";
import { VideoIframesComponent } from "./components/video-iframes/video-iframes.component";
import { SafePipe } from "./pipes/safe.pipe";
import { BlogsComponent } from "./components/blogs/blogs.component";
import { AwardsComponent } from "./unused-components/awards/awards.component";
import { BtsComponent } from "./unused-components/bts/bts.component";
import { ComponentTitleComponent } from "./components/component-title/component-title.component";
import { ThumbnailCardComponent } from "./unused-components/thumbnail-card/thumbnail-card.component";
import { NgMasonryGridModule } from "ng-masonry-grid";
import { FooterComponent } from './components/footer/footer.component';
import { EmailComponent } from './components/email/email.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    FetchFileComponent,
    UploadFileComponent,
    DetailsComponent,
    NavbarComponent,
    AdminComponent,
    UserviewComponent,
    SlideshowComponent,
    BioComponent,
    CatalogueComponent,
    SubcatalogueComponent,
    GalleryComponent,
    GalleryModalComponent,
    VideosComponent,
    VideoIframesComponent,
    SafePipe,
    BlogsComponent,
    AwardsComponent,
    BtsComponent,
    ComponentTitleComponent,
    ThumbnailCardComponent,
    FooterComponent,
    EmailComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    CustomNgMaterialModule,
    ModalGalleryModule.forRoot(),
    SlickModule.forRoot(),
    NgMasonryGridModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [FileLoaderService, DataStoreService],
  bootstrap: [AppComponent],
  entryComponents: [GalleryModalComponent]
})
export class AppModule {}
