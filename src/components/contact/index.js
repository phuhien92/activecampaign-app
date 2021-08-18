import React from 'react';
import { ErrorsContext } from '../../context';
import Avatar from '../Avatar';
import StyledRow from './row.style';
import { fetchData } from './../../api';
import { API_URL, CORS_URL, currency_symbols } from '../../constant';

const Contact = ({ contact }) => {
    const [deals, setDeals] = React.useState(0);
    const [location, setLocation] = React.useState(null);
    const [tags, setTags] = React.useState([]);
    const [value, setValue] = React.useState(0);
    const { error, setError } = React.useContext(ErrorsContext);
    const { id, firstName, lastName, email } = contact;

    React.useEffect(() => {
        let isCanceled = false;

        (async () => {
            try {
                const response = await fetchData(`${API_URL}/contacts/${id}`);
                const tagsResponse = await fetchData(`${API_URL}/contacts/${id}/contactTags`);

                tagsResponse.contactTags.forEach(async (cTag) => {
                    const tag = await fetchData(`${CORS_URL}${cTag.links.tag}`);

                    if (!isCanceled) setTags(prev => [...prev, tag.tag.tag]);
                })

                let totalValue = value;
                response.deals.forEach((deal) => {
                    if (deal.currency === 'usd') {
                        totalValue += Number(deal.value);
                    } else if (deal.currency === 'eur') {
                        totalValue += Number(deal.value) * 1.18;
                    } else if (deal.currency === 'aud') {
                        totalValue += Number(deal.value) * 0.74;
                    }

                    if (!isCanceled) setValue(Math.floor(totalValue));
                });

                const geoIps = response.geoIps.lenngth > 0 ? `${response.geoIps[0].city}, ${response.geoIps[0].state}, ${response.geoIps[0].country}` : '';

                if (!isCanceled) {
                    setLocation(geoIps);
                    setDeals(response.deals);
                }
            } catch (e) {
                if (error !== e) {
                    setError(e);
                }
            }
        })();

        return () => isCanceled = true;
    }, [error, id, setError, value]);

    return (
        <StyledRow>
            <td><input type="checkbox" className="input-checkbox" /></td>
            <td className="text-blue font-weight-semibold">
                <div className="center-align">
                    <Avatar
                        email={email}
                        name={`${firstName} ${lastName}`}
                    />
                    <span className="ml-1">{firstName} {lastName}</span>
                </div>
            </td>
            <td>{currency_symbols.usd}{value.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
            <td>{location}</td>
            <td>{deals.length}</td>
            <td>{tags.join(',')}</td>
        </StyledRow>
    )
}

export default Contact;