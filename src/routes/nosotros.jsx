import { Card, CardBody, Image, ScrollShadow, Tab, Tabs } from "@nextui-org/react";
import IMGTemp from '../images/helado.jpg'

export default function Nosotros() {
    return (
        <>
            <section id="Nosotros" className="lg:grid grid-cols-2 lg:h-164 bg-frutos-rojos bg-no-repeat bg-cover bg-fixed">
                <div className="grid content-center sm:p-20 p-10 bg-white99">
                    <section data-aos="fade-up">
                        <Tabs aria-label="Options" variant="underlined" color="primary">
                            <Tab key="nosotros" title="¿Quiénes somos?">
                                <Card className="bg-transparent">
                                    <CardBody className="border-none">
                                        <p className="hidden mxl:flex text-xl leading-relaxed">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed unde ea neque maiores velit facere corporis sit quidem odit nam voluptatum eveniet quaerat fugiat, culpa nostrum aut atque tempore. Natus modi fuga, officia quo quam quidem labore recusandae, harum odit minus sed nam fugiat distinctio alias blanditiis asperiores eos dolorem itaque quibusdam possimus eaque. Magni amet voluptatum consectetur eaque officiis ipsum voluptates totam quaerat libero est sint eveniet earum, quod, magnam enim iste tempora vero.
                                        </p>
                                        <ScrollShadow hideScrollBar size={20} className="mxl:hidden h-[150px]">
                                            <p className="text-xl leading-relaxed">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed unde ea neque maiores velit facere corporis sit quidem odit nam voluptatum eveniet quaerat fugiat, culpa nostrum aut atque tempore. Natus modi fuga, officia quo quam quidem labore recusandae, harum odit minus sed nam fugiat distinctio alias blanditiis asperiores eos dolorem itaque quibusdam possimus eaque. Magni amet voluptatum consectetur eaque officiis ipsum voluptates totam quaerat libero est sint eveniet earum, quod, magnam enim iste tempora vero.
                                            </p>
                                        </ScrollShadow>
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab key="mision" title="Misión">
                                <Card className="bg-transparent">
                                    <CardBody>
                                        <p className="hidden mxl:flex text-xl leading-relaxed">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas at omnis iure id sint reiciendis sapiente distinctio, molestiae magnam reprehenderit, tempore ratione suscipit veniam asperiores cupiditate, eum debitis. Consectetur quisquam, laborum culpa fuga alias architecto natus mollitia iste sint, nesciunt reprehenderit consequatur inventore neque! Vitae, perferendis? Eius doloribus quas officia?
                                        </p>
                                        <ScrollShadow hideScrollBar size={20} className="mxl:hidden h-[150px]">
                                            <p className="text-xl leading-relaxed">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas at omnis iure id sint reiciendis sapiente distinctio, molestiae magnam reprehenderit, tempore ratione suscipit veniam asperiores cupiditate, eum debitis. Consectetur quisquam, laborum culpa fuga alias architecto natus mollitia iste sint, nesciunt reprehenderit consequatur inventore neque! Vitae, perferendis? Eius doloribus quas officia?
                                            </p>
                                        </ScrollShadow>
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab key="vision" title="Visión">
                                <Card className="bg-transparent">
                                    <CardBody>
                                        <p className="hidden mxl:flex text-xl leading-relaxed">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio mollitia natus fugiat quo quos ipsa rerum eum amet officia, numquam iste ullam et accusantium, voluptatum voluptates asperiores in veritatis fuga.
                                        </p>
                                        <ScrollShadow hideScrollBar size={20} className="mxl:hidden h-[150px]">
                                            <p className="text-xl leading-relaxed">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio mollitia natus fugiat quo quos ipsa rerum eum amet officia, numquam iste ullam et accusantium, voluptatum voluptates asperiores in veritatis fuga.
                                            </p>
                                        </ScrollShadow>
                                    </CardBody>
                                </Card>
                            </Tab>
                        </Tabs>
                    </section>
                </div>
                <div className="grid content-center sm:p-10 p-5 bg-white99">
                    <section data-aos="fade-down">
                        <Image
                            isBlurred
                            isZoomed
                            height={500}
                            src={IMGTemp}
                            alt="NextUI Album Cover"
                            className="w-full h-full"
                        />
                    </section>
                </div>
            </section>
        </>
    );
}