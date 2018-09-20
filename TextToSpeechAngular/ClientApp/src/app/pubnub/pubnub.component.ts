import { Component, OnInit } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';

@Component({
  selector: 'app-pubnub',
  templateUrl: './pubnub.component.html',
  styleUrls: ['./pubnub.component.css'],
  providers: [PubNubAngular]
})

// see https://www.pubnub.com/docs/angular2-javascript/pubnub-javascript-sdk 
export class PubnubComponent implements OnInit {

  public theText: string;

  constructor(private pubnub: PubNubAngular) {

    pubnub.init({
      publishKey: 'pub-c-e11114a1-c46e-485f-8cd3-4edc9c242673',
      subscribeey: 'sub-c-c47a6758-bccd-11e8-9232-1678d61e8f93'
    });
    pubnub.getInstance('another').init({
      publishKey: 'pub-c-e11114a1-c46e-485f-8cd3-4edc9c242673',
      subscribeKey: 'sub-c-c47a6758-bccd-11e8-9232-1678d61e8f93'
    });

    this.subscribe();

  }

  ngOnInit() {
  }

  sayIt() {

    console.log(this.theText);

    this.publish();
  }

  subscribe() {
    this.pubnub.getInstance("another").grant(
      {
        channels: ['my_channel'],
       // authKeys: ['my_authkey'],
        read: true,
        write: false
      }, (status) => {
        console.log(status);
      }
    );
    /*
    this.pubnub.getInstance("another").grant(
      {
        channels: ['my_channel'],
        authKeys: ['my_authkey'],
        read: true,
        write: false
      }, (status) => {
        console.log(status);
      }
    );
    */
  }

  publish() {
    this.pubnub.publish(
      {
        message: { such: 'Hello!' },
        channel: 'my_channel'
      },
      (status, response) => {
        if (status.error) {
          console.log(status);
        } else {
          console.log('message Published w/ timetoken', response.timetoken);
        }
      }
    );
  }
}
