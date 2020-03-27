import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      <!-- Created with ♥ by <b><a href="https://akveo.page.link/8V2f" target="_blank">Akveo</a></b> 2019 -->
    </span>
    <div class="socials m-0 p-0">
      <a href="https://www.facebook.com/cybot-bolivia" target="_blank" style="text-decoration:none !important;"><i class="fab fa-facebook-f m-0 p-0"></i>acebook CYBOT</a>
      <a href="#" target="_blank"><i class="fas fa-envelope m-0 p-0"></i></a>
    </div>
  `,
})
export class FooterComponent {
}
