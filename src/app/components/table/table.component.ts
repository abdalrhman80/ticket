import { Component } from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  users!: any[];
  pages!: any[];
  first: number = 0;
  rows: number = 10;

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
  ngOnInit() {
    this.pages = [
      { pageNumber: '10', code: '90' },
      { pageNumber: '20', code: '190' },
      { pageNumber: '40', code: '390' },
      { pageNumber: '60', code: '590' },
      { pageNumber: '80', code: '790' },
      { pageNumber: '100', code: '990' },
      { pageNumber: '150', code: '1490' },
      { pageNumber: '250', code: '2490' },
    ];

    this.users = [
      {
        user_id: 1,
        user_name: 'أحمد محمود',
        user_phone: "0123456789",
        avatar: ``,
        avatarBg: `#038CB7`,
        ticket_number: 'C-101',
        ticket_price: '$40',
        cinemas: "سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...",
        cinemaContinue: "صيدناوي مول , برج العرب",
        number_of_person: 1,
        number_of_purchases: "مرة واحدة",
        ticket: "تذكرة رقم 45.pdf"
      },
      {
        user_id: 1,
        user_name: 'محمد الغريب',
        user_phone: "0123456789",
        avatar: `https://s3-alpha-sig.figma.com/img/59f0/2c4b/cbdd523e71b3116ed91774491e9f7543?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VLr0-NV-qpojo6r0wIa9gIsW2zJ-Jy6Kct-OLY1zSZ0RkVVfauQMf7vCpfz2biwZ9u9aociraGj6jRWNGoR0w6~B4l1mDBVx~IyISsWYKQsPvtmvGdTGBDoKVUesChy-JdLxgp2nbKgsZutZaIybG9f3VupzPDCUEPAjYIKLfd9L3HhMgHkduzw1FVs3T~zn-zfuWnl15A57UdD-PKJOu0586leeSkJpy2X-kdWRgOt9y7cUs-wJbDTnSoafEPfTPhmFQqRH0QF0xQLQmDMhTk-Fn0~pVD3-jeBzVdNe7yzvJzo1drUc2V4AkHwKrBpUGIaK5YlT249cUXZlkWOt-Q__`,
        ticket_number: 'C-102',
        ticket_price: '$30',
        cinemas: "سينما مصر , مول العرب , برج الأطنان , سرايا القبة",
        number_of_person: 1,
        number_of_purchases: "مرة واحدة",
        ticket: "تذكرة رقم 45.pdf"
      },
      {
        user_id: 3,
        user_name: 'محمد الغريب',
        user_phone: "0123456789",
        avatar: `https://s3-alpha-sig.figma.com/img/bf1c/e766/e29aa6f9014fbaca20461a4f1c43cfdb?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kDnvDvpbJ2UTFXUrqheCMPdGysrSreRF3QaV8v4gLIVy2~XuUGQWvGo~J~Z7YqnBcBjtGzNSNFAjZ2prkw0GTlspTM9Ps9VgPAPhgK6YoJefEA2eUV-tsu2rAR5vJz~ogzBHNuut0r6O2E58c4jW7Ib~uGLVvy0COv3q~GCycOn3eI7gq5FsqpVjjpyRuaOyOkId4bJbGSoNo~yVGVNXrCBA0B1M1gwdP4Fxd6btv6Yp1kVkzyxdqKrGx-c8Qoc10IDiHcs~nAVaf584jnjTAiUNWU6QYacx-A9hd0-Lt4VttRbVekAmA5r2ZnstmGxFx13IbhrRZ5caNI3wPk9zDw__`,
        ticket_number: 'C-102',
        ticket_price: '$45',
        cinemas: "سينما مصر , مول العرب , برج الأطنان , سرايا القبة",
        number_of_person: 1,
        number_of_purchases: "مرة واحدة",
        ticket: "تذكرة رقم 45.pdf"
      },
      {
        user_id: 4,
        user_name: 'محمد الغريب',
        user_phone: "0123456789",
        avatar: ``,
        avatarBg: `#898E95`,
        ticket_number: 'C-103',
        ticket_price: '$54',
        cinemas: "سينما مصر , مول العرب , برج الأطنان , سرايا القبة",
        number_of_person: 1,
        number_of_purchases: "مرة واحدة",
        ticket: "تذكرة رقم 45.pdf"
      },
    ]
  }
}
