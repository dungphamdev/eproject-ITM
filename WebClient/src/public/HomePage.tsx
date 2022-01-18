import React from "react";
import JsonData from "../data/data.json";

import { Navigation } from "../components/navigation";
import { Header } from "../components/header";
import { Features } from "../components/features";
import { About } from "../components/about";
import { Services } from "../components/services";
import { Gallery } from "../components/gallery";
import { Testimonials } from "../components/testimonials";
import { Team } from "../components/Team";
import { Contact } from "../components/contact";

interface IProps { }

interface IState {
    landingPageData: any;
}

export default class HomePage extends React.Component<IProps, IState> {
    constructor(props: IProps | Readonly<IState>) {
        super(props);

        this.state = {
            landingPageData: { ...JsonData }
        };
    }

    render() {

        let { landingPageData } = this.state;

        return (
            <>
                <Navigation />
                <Header data={landingPageData.Header} />
                <Features data={landingPageData.Features} />
                <About data={landingPageData.About} />
                <Services data={landingPageData.Services} />
                <Gallery data={landingPageData.Gallery} />
                <Testimonials data={landingPageData.Testimonials} />
                <Team data={landingPageData.Team} />
                <Contact data={landingPageData.Contact} />
            </>
        )
    }
}