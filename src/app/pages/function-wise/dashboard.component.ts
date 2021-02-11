import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { SolarData } from '../../@core/data/solar';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
  value: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class FunctionWiseComponent implements OnDestroy {

  private alive = true;

  solarValue: number;
  totalCard: CardSettings = {
    title: "Total Compliances(KPI's)",
    iconClass: 'nb-alert',
    type: 'info',
    value: '15',
  };
  lightCard: CardSettings = {
    title: 'Major',
    iconClass: 'nb-alert',
    type: 'danger',
    value: '15',
  };
  rollerShadesCard: CardSettings = {
    title: 'Minor',
    iconClass: 'nb-alert',
    type: 'warning',
    value: '30',
  };
  wirelessAudioCard: CardSettings = {
    title: 'Total Alerts',
    iconClass: 'nb-alert',
    type: 'info',
    value: '45',
  };
  // coffeeMakerCard: CardSettings = {
  //   title: 'Coffee Maker',
  //   iconClass: 'nb-coffee-maker',
  //   type: 'warning',
  // };

  statusCards: string;
  cardsAndValues = [{
    title: 'Information Security Policies',
    value: '95'
  },{
    title: 'Cryptography',
    value: '40'
  },{
    title: 'Organization of Information Security',
    value: '40'
  },{
    title: 'Operation Security',
    value: '35'
  },{
    title: 'HR Security',
    value: '90'
  },{
    title: 'Communication Security',
    value: '90'
  },{
    title: 'Asset Management',
    value: '70'
  },{
    title: 'System Acquisition, Development & Maintenance',
    value: '100'
  },{
    title: 'Access Control',
    value: '60'
  },{
    title: 'Incident Management Security',
    value: '80'
  },{
    title: 'Supplier Relationship',
    value: '90'
  },{
    title: 'Compliance',
    value: '100'
  },{
    title: 'BCM & Security',
    value: '60'
  }]
  commonStatusCardsSet: CardSettings[] = [
    this.totalCard,
    this.lightCard,
    this.rollerShadesCard,
    this.wirelessAudioCard,
    // this.coffeeMakerCard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
    dark: CardSettings[];
  } = {
      default: this.commonStatusCardsSet,
      cosmic: this.commonStatusCardsSet,
      corporate: [
        {
          ...this.lightCard,
          type: 'primary',
        },
        {
          ...this.rollerShadesCard,
          type: 'primary',
        },
        {
          ...this.wirelessAudioCard,
          type: 'danger',
        },
        // {
        //   ...this.coffeeMakerCard,
        //   type: 'info',
        // },
      ],
      dark: this.commonStatusCardsSet,
    };

  constructor(private themeService: NbThemeService,
    private solarService: SolarData) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
      });

    this.solarService.getSolarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.solarValue = data;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
