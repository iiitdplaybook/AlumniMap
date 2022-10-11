mapboxgl.accessToken =
  "pk.eyJ1Ijoic3BhY3NwYWRlIiwiYSI6ImNsOHJnZ2ZreTA5M2kzeXBjZjd6dGFiNGEifQ.qT1yNywVrDbqC4-wyZcsbg";
const people = [
  {
    name: "Aneesha Lakra",
    location: "Seattle, USA",
    batch: "Grad'22",
    coordinates: [-122.330062, 47.603832],
    image: "Assets/Profiles/AneeshaLakra.jpeg",
    description:
      " is a Masters student at University of Washington since September 28, 2022",
    linkedin: "https://www.linkedin.com/in/aneeshalakra",
    twitter: "",
    instagram: "",
    email: "",
  },
  {
    name: "Navneet Agarwal",
    location: "Gurgaon, India",
    batch: "Grad'22",
    coordinates: [77.029919, 28.464615],
    image: "Assets/Profiles/NavneetAgarwal.jpg",
    description: " is a Software Developer at Adobe since July 19, 2022",
    linkedin: "",
    twitter: "navneetagarwal_",
    instagram: "",
    email: "",
  },
  {
    name: "Himanshu Raj",
    location: "Dublin, Ireland",
    batch: "Grad'22",
    coordinates: [-6.26583, 53.3425],
    image: "Assets/Profiles/HimanshuRaj.jpeg",
    description: " is a Software Engineer at Google since July 19, 2022",
    linkedin: "",
    twitter: "",
    instagram: "himanshu.raj18",
    email: "",
  },
  {
    name: "Raghav Gupta",
    location: "London, UK",
    batch: "Grad'22",
    coordinates: [-0.127647, 51.507322],
    image: "Assets/Profiles/RaghavGupta.jpg",
    description:
      " is a Software Engineer at Hudson River Trading since August 15, 2022",
    linkedin: "",
    twitter: "",
    instagram: "",
    email: "raghav18076@iiitd.ac.in",
  },
  {
    name: "Sahil Yadav",
    location: "Delhi, India",
    batch: "Grad'22",
    coordinates: [77.21667, 28.66667],
    image: "Assets/Profiles/SahilYadav.jpeg",
    description:
      " is a 2D FX animator at Vaanarsena Studios since September 9, 2020",
    linkedin: "https://www.linkedin.com/in/sahilartfusion/",
    twitter: "sahilartfusion",
    instagram: "sahilartfusion",
    email: "sahilartfusion@gmail.com",
  },
  {
    name: "Smera Goel",
    location: "Berlin, Germany",
    batch: "Grad'22",
    coordinates: [13.38333, 52.51667],
    image: "Assets/Profiles/SmeraGoel.jpeg",
    description: " is a Product Designer at Jolocom since January 5, 2022",
    linkedin: "",
    twitter: "",
    instagram: "smeragoel",
    email: "smera18315@iiitd.ac.in",
  },
  {
    name: "Kshitij Agrawal",
    location: "London, UK",
    batch: "Grad'22",
    coordinates: [-0.127647, 51.507322],
    image: "Assets/Profiles/KshitijAgrawal.png",
    description: " is a Design Analyst at JP Morgan since September 12, 2022",
    linkedin: "",
    twitter: "imkshitij16",
    instagram: "okkshitij",
    email: "kshitij18292@iiitd.ac.in",
  },
  {
    name: "Vishesh Agrawal",
    location: "Los Angeles, USA",
    batch: "Grad'22",
    coordinates: [-118.242766, 34.053691],
    image: "Assets/Profiles/VisheshAgrawal.jpg",
    description:
      " is a Master's Student in CS (Artificial Intelligence) at University of Southern California since August 8, 2022",
    linkedin: "https://www.linkedin.com/in/visheshagrawal03/",
    twitter: "iamvisheshag",
    instagram: "vishesh_38",
    email: "vishesh18420@iiitd.ac.in",
  },
  {
    name: "Anushka Bhandari",
    location: "Amsterdam, Netherlands",
    batch: "Grad'22",
    coordinates: [4.893604, 52.37276],
    image: "Assets/Profiles/AnushkaBhandari.jpg",
    description:
      " is a Software Engineer at Databricks since September 5, 2020",
    linkedin: "https://www.linkedin.com/in/anushkabhandari45/",
    twitter: "AnushkaB_",
    instagram: "anushkabhandari_",
    email: "anushka.bhandari45@gmail.com",
  },
  {
    name: "Arpit Bhatia",
    location: "Copenhagen, Denmark",
    batch: "Grad'22",
    coordinates: [12.570072, 55.686724],
    image: "Assets/Profiles/ArpitBhatia.png",
    description:
      " is a PhD student at University of Copenhagen since October 11, 2021",
    linkedin: "https://www.linkedin.com/in/arpit-bhatia",
    twitter: "ArpitBhtia",
    instagram: "arpitbhtia",
    email: "arpitmail20@gmail.com",
  },
  {
    name: "Anshul Mendiratta",
    location: "Texas, United States",
    batch: "Grad'22",
    coordinates: [-94.917549, 29.396013],
    image: "Assets/Profiles/AnshulMendiratta.jpg",
    description: " is a PhD student at Texas A&M since August 20, 2022",
    linkedin: "",
    twitter: "",
    instagram: "_drigil_",
    email: "anshulmendiratta10@gmail.com",
  },
  {
    name: "Sejal Bhalla",
    location: "Toronto, Canada",
    batch: "Grad'22",
    coordinates: [-79.383935, 43.653482],
    image: "Assets/Profiles/SejalBhalla.jpeg",
    description:
      " is a PhD student at University of Toronto since September 10, 2021",
    linkedin: "https://www.linkedin.com/in/sejal-bhalla",
    twitter: "",
    instagram: "",
    email: "sejal@cs.toronto.edu",
  },
];
let features = [];
people.forEach((person) => {
  features.push({
    type: "Feature",
    properties: {
      message:
        '<div style="display: flex; text-align: center; align-items: center; flex-direction: column; padding: 3%; bottom-margin: 0%"><div style="display:flex; flex-direction:row; width:100%; justify-content: center"><img src=' +
        person.image +
        ' height="20px" width="20px" style="border-radius: 50%; margin-right: 2%"><strong style="font-size:12px">' +
        person.name +
        '</strong></div><div style="margin-top: 2%">' +
        person.location +
        " | " +
        person.batch +
        '</div><p style="margin-bottom: 0">' +
        person.name.split(" ", 1) +
        person.description +
        '</p><div style="display:flex; flex-direction: row; padding: 3%; justify-content:center">' +
        (person.instagram
          ? '<a style="text-decoration:none; outline:none; padding: 1%; margin-top: 5%;  margin-right: 10%; margin-left: 10%; opacity: .6;" target="_blank" href="https://instagram.com/' +
            person.instagram +
            '"><i class="fa fa-instagram" style="font-size:20px"></i></a>'
          : "") +
        (person.linkedin
          ? '<a style="text-decoration:none; outline:none; padding: 1%; margin-top: 5%; margin-right: 10%; margin-left: 10%; opacity: .5;" target="_blank" href=' +
            person.linkedin +
            '><i class="fa fa-linkedin-square" style="font-size:20px"></i></a>'
          : "") +
        (person.twitter
          ? '<a style="text-decoration:none; outline:none; padding: 1%; margin-top: 5%; margin-right: 10%; margin-left: 10%; opacity: .5;" target="_blank" href="https://twitter.com/' +
            person.twitter +
            '"><i class="fa fa-twitter" style="font-size:20px"></i></a>'
          : "") +
        (person.email
          ? '<a style="text-decoration:none; outline:none; padding: 1%; margin-top: 5%; margin-right: 10%; margin-left: 10%; opacity: .5;" target="_blank" href="mailto:' +
            person.email +
            '"><i class="fa fa-envelope" style="font-size:16px"></i></a>'
          : "") +
        "</div></div>",
      iconSize: [30, 30],
      backgroundImage: person.image,
    },
    geometry: {
      type: "Point",
      coordinates: person.coordinates,
    },
  });
});
const geojson = {
  type: "FeatureCollection",
  features: features,
};
const map = new mapboxgl.Map({
  container: "map",
  zoom: 2,
  center: [60, 30],
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  // style: 'mapbox://styles/mapbox/outdoors-v11',
  style: "mapbox://styles/spacspade/cl8ri7i4q002814t5pwfrche0",
  projection: "globe", // Display the map as a globe
});

map.on("style.load", () => {
  map.setFog({}); // Set the default atmosphere style
});

// The following values can be changed to control rotation speed:

// At low zooms, complete a revolution every two minutes.
const secondsPerRevolution = 160;
// Above zoom level 5, do not rotate.
const maxSpinZoom = 5;
// Rotate at intermediate speeds between zoom levels 3 and 5.
const slowSpinZoom = 3;

let userInteracting = false;
let spinEnabled = true;

function spinGlobe() {
  const zoom = map.getZoom();
  if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
    let distancePerSecond = 360 / secondsPerRevolution;
    if (zoom > slowSpinZoom) {
      // Slow spinning at higher zooms
      const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
      distancePerSecond *= zoomDif;
    }
    const center = map.getCenter();
    center.lng -= distancePerSecond;
    // Smoothly animate the map over one second.
    // When this animation is complete, it calls a 'moveend' event.
    map.easeTo({ center, duration: 1000, easing: (n) => n });
  }
}

// Pause spinning on interaction
map.on("mousedown", () => {
  userInteracting = true;
});

// Restart spinning the globe when interaction is complete
map.on("mouseup", () => {
  userInteracting = false;
  spinGlobe();
});

// These events account for cases where the mouse has moved
// off the map, so 'mouseup' will not be fired.
map.on("dragend", () => {
  userInteracting = false;
  spinGlobe();
});
map.on("pitchend", () => {
  userInteracting = false;
  spinGlobe();
});
map.on("rotateend", () => {
  userInteracting = false;
  spinGlobe();
});

// When animation is complete, start spinning if there is no ongoing interaction
map.on("moveend", () => {
  spinGlobe();
});

document.getElementById("btn-spin").addEventListener("click", (e) => {
  spinEnabled = !spinEnabled;
  if (spinEnabled) {
    spinGlobe();
    e.target.innerHTML = "Pause rotation";
  } else {
    map.stop(); // Immediately end ongoing animation
    e.target.innerHTML = "Start rotation";
  }
});

spinGlobe();

// Add markers to the map.
for (const marker of geojson.features) {
  // Create a DOM element for each marker.
  const el = document.createElement("div");
  const width = marker.properties.iconSize[0];
  const height = marker.properties.iconSize[1];
  const description = marker.properties.message;
  const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`${description}`);
  el.className = "marker";
  // el.style.backgroundImage = `url(https://placekitten.com/g/${width}/${height}/)`;
  el.style.backgroundImage = `url(${marker.properties.backgroundImage})`;
  el.style.width = `${width}px`;
  el.style.height = `${height}px`;
  el.style.backgroundSize = "100%";

  // Add markers to the map.
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(popup)
    .addTo(map);
}
