import styled from 'styled-components';
import FlowerCard from './FlowerCard';

const CatalogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const flowers = [
  {
    id: 1,
    name: 'Rosas eternas',
    desc: 'Arreglo suave de rosas para expresar tu cariño.',
    price: 50,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    name: 'Lirios de paz',
    desc: 'Lirios blancos que transmiten serenidad.',
    price: 45,
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    name: 'Flores del recuerdo',
    desc: 'Selección armoniosa para honrar la memoria.',
    price: 60,
    image: 'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=500&q=60',
  },
];

export default function FlowerCatalog({ addToCart }) {
  return (
    <section id="catalogo">
      <h2 style={{ fontFamily: 'Playfair Display, serif', color: '#6f4e37', textAlign: 'center' }}>Catálogo de flores</h2>
      <CatalogGrid>
        {flowers.map(f => (
          <FlowerCard key={f.id} flower={f} onAdd={addToCart} />
        ))}
      </CatalogGrid>
    </section>
  );
}
