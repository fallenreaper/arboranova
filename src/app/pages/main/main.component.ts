import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  // materials = ["hello", "world"]
  images = [
    {
      name: 'Shooting Strain Mother with Sentry',
      src: 'assets/images/sentry-shoots-mother.png',
    },
    { name: 'Sentry Life', src: 'assets/images/sentry-life.png' },
    {
      name: 'Logistics SQD Repositions during the Fight.',
      src: 'assets/images/basi-reposition.png',
    },
    {
      name: 'Bustards Move our Corp Assets',
      src: 'assets/images/bustard-bridge.png',
    },
    {
      name: 'Gila walks away from NPC Explosions',
      src: 'assets/images/gila-michael-bay.png',
    },
    {
      name: 'Ducklings following mama',
      src: 'assets/images/duckling.png'
    }
  ];

  text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at lorem nibh. Etiam feugiat felis et tellus ornare consectetur. Praesent vitae suscipit mi. Maecenas laoreet neque ac ex interdum, a ullamcorper felis accumsan. Nam porttitor libero quis felis sollicitudin, vitae laoreet diam suscipit. Pellentesque facilisis mattis ligula, sit amet pellentesque libero luctus at. Suspendisse id augue sapien. Phasellus sed placerat nisl, nec ultrices neque. Cras ornare at velit in hendrerit. Suspendisse ante ante, ultrices vel nisi quis, finibus accumsan metus.
  Integer venenatis vel felis sit amet egestas. Mauris posuere purus eget condimentum ultricies. Suspendisse leo justo, ultricies vitae lobortis id, interdum sed purus. Integer consequat, neque nec lacinia maximus, lorem lorem luctus leo, eu finibus ante quam sed diam. Etiam sed orci sit amet ante facilisis iaculis aliquet a enim. Sed molestie hendrerit tellus sit amet lacinia. Praesent condimentum ante id vulputate bibendum. Nullam feugiat sem id eros porttitor, pretium dignissim elit varius. Nulla vulputate erat non pharetra vestibulum. Duis vulputate ultrices diam, et auctor est tristique id. Vivamus condimentum purus eget diam tincidunt, bibendum consequat orci malesuada. Aliquam mattis elit diam, in porta sem aliquam non. Praesent non nisi mollis, vulputate magna eget, finibus ante. Donec sit amet porta lorem, convallis pellentesque sem.
  Pellentesque nec dapibus diam. Nunc rhoncus malesuada sapien fermentum aliquet. Etiam commodo molestie cursus. Fusce viverra dolor hendrerit arcu aliquam, a malesuada mi laoreet. Fusce vehicula condimentum metus. Vivamus sodales, metus sit amet ornare feugiat, nunc leo luctus mauris, ac pulvinar dolor tellus a mi. Quisque pellentesque eros enim, id ultricies eros pellentesque sit amet. Nullam nec mi nec nulla blandit tincidunt ut eu diam. Quisque congue id turpis a ultrices.
  Nunc in varius est. Sed accumsan, neque sed tempus porta, arcu quam dignissim elit, ut pulvinar sapien odio eu libero. Phasellus congue tortor sed sem eleifend convallis. Ut egestas, elit a feugiat faucibus, lectus lacus dictum arcu, at tempor diam odio sit amet orci. Sed rutrum nisl velit, id vulputate magna dapibus sed. Nulla tincidunt orci a ipsum tempus, sit amet elementum libero tristique. Phasellus sed odio ut nisi scelerisque fringilla. Phasellus bibendum vehicula nulla, sed sagittis purus sagittis ut. Phasellus fringilla in enim quis tempor.
  Ut vitae enim id dolor finibus rutrum. Aliquam a justo cursus, elementum sem vitae, ullamcorper ex. Nam vestibulum elit eu vehicula facilisis. Fusce a maximus quam, sit amet rhoncus est. Integer sed convallis justo, in faucibus ligula. Vivamus tincidunt ante eget urna tempus, a condimentum sem feugiat. Pellentesque finibus diam in viverra vehicula. Suspendisse sodales nunc id magna feugiat, vitae porta justo bibendum. Mauris urna lectus, maximus nec ligula et, tincidunt blandit tortor. Donec sem ante, pulvinar id condimentum in, vestibulum et sapien.
  `;
  content = [];
  constructor() {
    this.content = this.text.split('\n');//.map( i => `<span style="display:block;text-indent:3vw;">${i}</span>`).join('');
  }

  ngOnInit(): void {}
}
