function preloader() {
    const imagesList = [
           "./img/solar.jpg",
           "./img/wind.jpg",
           "./img/hydro.jpg"
        ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};
window.addEventListener("load", preloader);

let buttonsNodeList = document.querySelectorAll("button");

let resource_object = {
    Solar: {
        headingContent: "Solar Energy",
        bodyText: "In 2011, the International Energy Agency said that the development of affordable, inexhaustible and clean solar energy technologies will have huge longer-term benefits. It will increase countries energy security through reliance on an indigenous, inexhaustible and mostly import-independent resource, enhance sustainability, reduce pollution, lower the costs of mitigating global warming, and keep fossil fuel prices lower than otherwise. These advantages are global. Hence the additional costs of the incentives for early deployment should be considered learning investments; they must be wisely spent and need to be widely shared",
        imgUrl: "./img/solar.jpg",
        imgAlt: "Solar Panels"
    },
    Wind: {
        headingContent: "Wind Energy",
        bodyText: "As of 2015, Denmark generates 40% of its electric power from wind, and at least 83 other countries around the world are using wind power to supply their electric power grids. In 2014, global wind power capacity expanded 16% to 369,553 MW. Yearly wind energy production is also growing rapidly and has reached around 4% of worldwide electric power usage, 11.4% in the EU.",
        imgUrl: "./img/wind.jpg",
        imgAlt: "Wind Turbines"
    },
    Hydro: {
        headingContent: "Hydro Electricity",
        bodyText: "The cost of hydroelectricity is relatively low, making it a competitive source of renewable electricity. The hydro station consumes no water, unlike coal or gas plants. The average cost of electricity from a hydro station larger than 10 megawatts is 3 to 5 U.S. cents per kilowatt-hour.[2] With a dam and reservoir it is also a flexible source of electricity since the amount produced by the station can be changed up or down very quickly to adapt to changing energy demands. Once a hydroelectric complex is constructed, the project produces no direct waste, and in many cases, has a considerably lower output level of greenhouse gases than fossil fuel powered energy plants.",
        imgUrl: "./img/hydro.jpg",
        imgAlt: "Water Dam"
    }
};

let content = document.getElementById("content");

buttonsNodeList[0].setAttribute("id", "active-button");

content.innerHTML = `<h1>${resource_object.Solar.headingContent}</h1>
     <img src="${resource_object.Solar.imgUrl}" alt="${resource_object.Solar.imgAlt}">
     <p>${resource_object.Solar.bodyText}</p>`;

function handleSelection() {

    for (let i = 0; i < buttonsNodeList.length; i++) {
        if (buttonsNodeList[i].hasAttribute("id")) {
            buttonsNodeList[i].removeAttribute("id");
        }
    }

    this.setAttribute("id", "active-button");

    for (let i = 0; i < buttonsNodeList.length; i++) {
        if (buttonsNodeList[i].hasAttribute("id")) {
            if (i == 0) {
                content.innerHTML = `<h1>${resource_object.Solar.headingContent}</h1><img src="${resource_object.Solar.imgUrl}" alt="${resource_object.Solar.imgAlt}"><p>${resource_object.Solar.bodyText}</p>`;
            }
            if (i == 1) {
                content.innerHTML = `<h1>${resource_object.Wind.headingContent}</h1><img src="${resource_object.Wind.imgUrl}" alt="${resource_object.Wind.imgAlt}"><p>${resource_object.Wind.bodyText}</p>`;
            }
            if (i == 2) {
                content.innerHTML = `<h1>${resource_object.Hydro.headingContent}</h1><img src="${resource_object.Hydro.imgUrl}" alt="${resource_object.Hydro.imgAlt}"><p>${resource_object.Hydro.bodyText}</p>`;
            }
        } //if-hasAttribute
    } //for-loop
} //handleSelection()

for (let i = 0; i < buttonsNodeList.length; i++) {
    buttonsNodeList[i].addEventListener("click", handleSelection)
}
