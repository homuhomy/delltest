import { AfterViewInit, Component } from '@angular/core';
import { SharedModules } from '../../shared/shared-modules';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import L, { icon, latLng, MapOptions, marker, Marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map-page',
  imports: [...SharedModules, LeafletModule],
  templateUrl: './map-page.html',
  styleUrl: './map-page.scss',
})

export class MapPage implements AfterViewInit{
  private map!: L.Map

  // protected readonly options: MapOptions = {
  //   layers: [
  //     tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  //       maxZoom: 19,
  //       attribution: '© OpenStreetMap contributors'
  //     }),
  //   ],
  //   zoom: 15,
  //   center:  latLng(3.1468059, 101.6882442),
    
  // };

  ngAfterViewInit(): void {
    this.map = L.map('map').setView([3.1468059, 101.6882442], 16);

    // Fix default icon paths
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    });
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    let marker = L.marker([3.1468059, 101.6882442]).addTo(this.map);
  }
}
