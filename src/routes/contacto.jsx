import { Card, CardBody, CardHeader, Divider, Image, Link } from "@nextui-org/react";
import imgCell from '../images/telefono.png'
import imgEmail from '../images/email.png'
import imgDirec from '../images/casa.png'

export default function Contact() {
    return (
        <>
            <section className="flex flex-col lg:flex-row h:auto lg:h-164" id="Contacto">
                <div data-aos="fade-down" className="flex flex-col justify-center items-center basis-3/4 p-2">
                    <strong className="mb-4 text-4xl text-left text-blue23 font-title w-full">Encuentranos</strong>
                    <iframe className="w-full lg:w-4/5 h-80 lg:h-4/5 rounded-md" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Helados%20Rey%20de%20los%20Andes%20Latacunga+(Rey%20de%20los%20Andes%20)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'>
                    </a>
                </div>
                <div data-aos="fade-up" className="flex flex-col space-y-8 justify-center items-center basis-1/4  my-7 lg:my-0">
                    <div data-aos="fade-up" data-os-distance='100px' className="relative">
                        <div className="absolute top-[-20%] left-[40%]">
                            <Image
                                src={imgCell}
                                height={40}
                                width={40}
                                radius="sm"
                                className="bg-white"
                            />
                        </div>
                        <Card
                            radius="lg"
                            className="border-none w-60 h-auto">
                            <CardHeader className="flex flex-col">
                                <strong className="w-full">Teléfono</strong>
                            </CardHeader>
                            <Divider />
                            <CardBody>
                                <Link href="https://api.whatsapp.com/send?phone=5930987757844&text=Hola, quiero helados :)" size="md">0987585892</Link>
                            </CardBody>
                        </Card>
                    </div>

                    <div data-aos="fade-up" data-os-distance='100px' className="relative">
                        <div className="absolute top-[-20%] left-[40%]">
                            <Image
                                src={imgEmail}
                                height={40}
                                width={40}
                                radius="sm"
                                className="bg-white"
                            />
                        </div>
                        <Card
                            radius="lg"
                            className="border-none w-60 h-auto">
                            <CardHeader className="flex flex-col">
                                <strong className="w-full">Email</strong>
                            </CardHeader>
                            <Divider />
                            <CardBody>
                                <Link href="mailto:bryan98jacome@gmail.com" size="md">reydelosandes@hotmail.com</Link>
                            </CardBody>
                        </Card>
                    </div>

                    <div data-aos="fade-up" data-os-distance='100px' className="relative">
                        <div className="absolute top-[-20%] left-[40%]">
                            <Image
                                src={imgDirec}
                                height={40}
                                width={40}
                                radius="sm"
                                className="bg-white"
                            />
                        </div>
                        <Card
                            radius="lg"
                            className="border-none w-60 h-auto">
                            <CardHeader className="flex flex-col">
                                <strong className="w-full">Direción</strong>
                            </CardHeader>
                            <Divider />
                            <CardBody>
                                <Link size="md">Zhumbalica Centro | Calle Colaisa</Link>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
}