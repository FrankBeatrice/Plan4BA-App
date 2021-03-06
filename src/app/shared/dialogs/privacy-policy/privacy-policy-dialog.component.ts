import { Component, OnInit } from '@angular/core';

import { InfoTextsService } from '@app/core/services/info-texts.service';

@Component({
  selector: 'p4ba-privacy-policy',
  templateUrl: './privacy-policy-dialog.component.html',
  styleUrls: ['./privacy-policy-dialog.component.scss']
})
export class PrivacyPolicyDialogComponent implements OnInit {
  contentText = '';

  constructor(private infoTextsService: InfoTextsService) {
    this.infoTextsService.getStructuredData().subscribe((infoTexts: any) => {
      if (infoTexts && infoTexts['login.privacynotice']) {
        this.contentText = infoTexts['login.privacynotice'];
      }
    });
  }

  ngOnInit() {}
}
