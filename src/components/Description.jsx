import location_image from "../assets/images/location.png";
import docoration_item from "../assets/images/description_item.png";
import location_logo_blue from "../assets/images/location_logo_blue.png";
const Description = (props) => {
  return (
    <div className="flex  gap-16 px-16 py-2">
      <div className="flex flex-col gap-y-6 py-8">
        <div className="flex gap-x-2">
          <h1 className="text-main-blue text-2xl">Description</h1>
          <img className="h-4 w-4 mt-3" src={docoration_item} />
        </div>
        <p className="text-lg">
          L'École nationale supérieure d'informatique (ESI), anciennement connue
          sous le nom d'Institut national de formation en informatique (INI),
          est une institution
          <br /> d'enseignement supérieur en Algérie dédiée à la formation
          d'ingénieurs d'État en <br />
          informatique. Localisée à Oued Smar, à environ 15 km du centre-ville
          d'Alger, <br />
          elle joue un rôle crucial dans le développement des compétences
          informatiques dans le pays.
        </p>
      </div>
      <div className="flex flex-col gap-y-6 py-8">
        <div className="flex gap-x-2">
          <h1 className="text-main-blue text-2xl">Localisation</h1>
          <img className="h-6 w-4 mt-2" src={location_logo_blue} />
        </div>
        <img className="w-[865px] h-[208px]" src={location_image}></img>
      </div>
    </div>
  );
};

export default Description;
