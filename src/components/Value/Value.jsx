import React from 'react'
import { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import './Value.css'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import data from'../../utils/accordion'

const Value = () => {
    const [expandedItem, setExpandedItem] = useState(null);
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            {/* Left */}
            <div className="v-left">
                <div className="image-container"><img src="./value.png" alt="Value Image" /></div>
            </div>
            {/* right */}
            <div className="v-right flexColStart">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value We Give To You</span>
                <span className='secondaryText'>
                    We always ready to help by providing  the best service for You
                    <br />
                    We believe a good place to live can make your life better
                </span>

                <Accordion allowMultipleExpanded={false} preExpanded={["Best interest rates on the market"]}>
                {data.map((item) => (
                    <AccordionItem
                    className={`accordionItem ${expandedItem === item.heading ? "expanded" : ""}`}
                    key={item.id}
                    uuid={item.heading} // Match UUID with preExpanded
                    >
                        <AccordionItemHeading>
                            <AccordionItemState>
                            {({ expanded }) => {
                                // Update state dynamically when an item is expanded or collapsed
                                if (expanded && expandedItem !== item.heading) {
                                setExpandedItem(item.heading); // Set the expanded item
                                } else if (!expanded && expandedItem === item.heading) {
                                setExpandedItem(null); // Reset the state if collapsed
                                }
                                return (
                                <AccordionItemButton
                                    className="flexCenter accordionButton"
                                    style={{
                                    boxShadow: expanded
                                        ? "0px 4px 10px rgba(0, 0, 0, 0.2)"
                                        : "none", // Apply box shadow dynamically
                                    transition: "box-shadow 0.3s ease",
                                    }}
                                >
                                    <div className="flexCenter icon">{item.icon}</div>
                                    <span className="flexCenter primaryText">{item.heading}</span>
                                    <div className="flexCenter icon">
                                    <MdOutlineArrowDropDown size={20} />
                                    </div>
                                </AccordionItemButton>
                                );
                            }}
                            </AccordionItemState>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className="secondaryText">{item.detail}</p>
                        </AccordionItemPanel>
                        </AccordionItem>
                ))}
                </Accordion>

            </div>
        </div>
    </section>
  )
}

export default Value
