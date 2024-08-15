import { useServices } from '../customHook/useServices';
import "../styleSheets/Services.css";
import ServiceList from './ServiceList';
import "../styleSheets/ServiceList.css";

export default function Service() {
    const [services] = useServices();

    return (
        <div className="services-container">
            {services.map((service, index) => (
                <ServiceList
                    key={index}
                    title={service.title}
                    description={service.description}
                    logo={service.logo}
                    link={service.link}
                />
            ))}
        </div>
    );
}
