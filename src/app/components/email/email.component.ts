import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FileLoaderService } from "../../services/file-loader.service";

@Component({
  selector: "app-email",
  templateUrl: "./email.component.html",
  styleUrls: ["./email.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class EmailComponent implements OnInit {
  // selectedFiles: FileList;
  email = {
    subject: "",
    body: ""
  };

  constructor(private fileLoaderService: FileLoaderService) {}

  ngOnInit() {}

  sendMail = (formDetails: any): void => {
    let emailBody = formDetails.value;

    this.email.subject = "Message from " + emailBody.fullName;
    this.email.body =
      "Email id: " + emailBody.email + ", Message: " + emailBody.message;
    // this.email.attachment = this.selectedFiles;
    this.fileLoaderService.sendEmail(this.email).subscribe(files => {
      console.log(files);
    });
  };

  // openFileBrowser(event) {
  //   let element: HTMLElement = document.getElementById(
  //     "attachmentFile"
  //   ) as HTMLElement;

  //   element.click();
  // }

  // selectFiles(event) {
  //   this.selectedFiles = event.target.files;
  // }
}
