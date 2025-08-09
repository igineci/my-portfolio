import GalleryCard from "../../../components/ui/gallery-card";
import ThreeDTiles from "../components/3d/3d-tiles";
import NewtonCradle from "./newton-cradle/cradle";

export default function ExperimentsContent() {
  return (
    <div className="animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GalleryCard title="Newton's cradle">
          <NewtonCradle />
        </GalleryCard>

        <GalleryCard title="Newton's cradle">
          <ThreeDTiles />
        </GalleryCard>
      </div>
    </div>
  );
}
