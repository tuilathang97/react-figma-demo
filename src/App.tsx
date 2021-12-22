import * as React from 'react';
import { Page, ComponentSet, Component, Svg } from 'react-figma';
import { renderToString } from "react-dom/server";

const XMLNS = "http://www.w3.org/2000/svg";
const CloseSVG = ({ primary }) => (
	<svg xmlns={XMLNS} viewBox={"0 0 12 12"} width={24} height={24}>
		<title>Close</title>
		<path fill={primary} d="M9.7,1.2c0.3-0.3,0.8-0.2,1.1,0.1c0.3,0.3,0.3,0.9,0,1.2l0,0L7.2,6l3.6,3.6c0.3,0.3,0.3,0.9,0,1.2c-0.3,0.3-0.8,0.3-1.1,0.1l-0.1-0.1L6,7.2l-3.6,3.6l-0.1,0.1c-0.3,0.3-0.8,0.2-1.1-0.1c-0.3-0.3-0.3-0.9,0-1.2l0,0L4.8,6L1.2,2.4c-0.3-0.3-0.3-0.9,0-1.2C1.5,0.9,2,0.9,2.3,1.2l0.1,0.1L6,4.8L9.7,1.2L9.7,1.2z" />
	</svg>
);

const Back = ({ primary }) => (
	<svg xmlns={XMLNS} viewBox={"0 0 12 12"} width={24} height={24}>
		<title>Back</title>
		<path fill={primary} d="M8.7,2.7c0.4-0.4,0.4-1,0-1.4C8.5,1.1,8.3,1,8,1C7.8,1,7.5,1.1,7.3,1.3c0,0-4,4-4.1,4c-0.4,0.4-0.4,1,0,1.4l4,4c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4L5.4,6L8.7,2.7" />
	</svg>
);

const pages = ["Page X", "Page Y", "Page Z"];

export const App = () => {
    return (
        <>
            {
                pages.map((page, index) => {
                    return(
                        <Page key={ index } isCurrent={ index === 0 } name={ page } style={{ flexDirection: 'row' }}>
                            <ComponentSet name="Close SVG set">
                                <Component>
                                    <Svg source={renderToString(CloseSVG({primary: "black"}))} />
                                    <Svg source={renderToString(CloseSVG({primary: "red"}))} />
                                    <Svg source={renderToString(CloseSVG({primary: "yellow"}))} />
                                </Component>
                            </ComponentSet>
                            <ComponentSet name="Back SVG set">
                                <Component>
                                    <Svg source={renderToString(Back({primary: "yellow"}))} />
                                    <Svg source={renderToString(Back({primary: "red"}))} />
                                    <Svg source={renderToString(Back({primary: "black"}))} />
                                </Component>
                            </ComponentSet>
                        </Page>
                    )
                })
            }
        
        </>
    );
};
