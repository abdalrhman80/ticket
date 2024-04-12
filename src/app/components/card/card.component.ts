import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [MessageService],
})
export class CardComponent {
  myAngularxQrCode: string = "";
  qrCodeDownloadLink: any = "";
  qrCodeLink: string = "www.tazkty.com/473847";

  constructor(
    public _Clipboard: Clipboard,
    private messageService: MessageService
  ) {
    this.myAngularxQrCode = 'Your QR code data string';
  }

  onChangeURL(url: any) {
    this.qrCodeDownloadLink = url;
  }

  copyToClipboard() {
    this._Clipboard.copy(this.qrCodeLink);
    this.copied();
  }

  copied() {
    this.messageService.add({ severity: 'warn', summary: 'Copied',life: 1500 });
  }
}
