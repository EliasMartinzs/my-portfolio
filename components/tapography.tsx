import Image from "next/image";
import SideDesktop from "../public/side-desktop.png";

export const Tapography = () => {
  return (
    <section id="typography" className="space-y-16 lg:space-y-16">
      <div className="w-full hidden lg:flex relative">
        <div className="w-[500px] h-full border border-muted-foreground rounded-full absolute -z-50 top-0 right-0 translate-x-1/2" />
        <Image
          src={SideDesktop}
          alt="side desktop"
          className="hidden lg:block w-1/2"
        />

        <div className="w-1/2 space-y-36">
          <h6 className="max-lg:px-8 text-4xl lg:text-8xl font-JetBrainsExtraBold">
            Tipografia
          </h6>

          <p className="max-w-2xl mx-auto">
            Utilizei a fonte JetBrains Mono para garantir máxima legibilidade e
            um visual moderno. Melhora a experiência de leitura e dá um toque
            profissional ao design.
          </p>

          <p className="max-w-2xl mx-auto text-7xl font-JetBrainsExtraBold">
            Jet Brains Mono
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-y-5 lg:hidden px-8 relative">
        <div className="w-3/4 h-3/4 absolute top-0 left-0 rounded-full border border-muted-foreground -translate-x-1/2" />

        <h6 className="text-4xl font-JetBrainsBold">
          {"<"}Tipografia{"/>"}
        </h6>

        <div className="grid grid-cols-2 gap-5 mt-10">
          <div className="w-full h-96 bg-[#A6A6A6] rounded-3xl flex items-end justify-center pb-20 text-background text-xl">
            #A6A6A6
          </div>

          <div className="h-96 flex flex-col gap-5">
            <small>
                Utilizei a fonte JetBrains Mono para garantir máxima legibilidade e
            um visual moderno. Melhora a experiência de leitura e dá um toque
            profissional ao design.
            </small>

            <div className="rounded-3xl bg-foreground border border-foreground text-background h-full grid place-items-center">
              #F5F5F5
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="h-96 flex flex-col gap-5">
            <div className="rounded-3xl border border-foreground h-full grid place-items-center">
              #121212
            </div>

            <small className="text-background cursor-default">
                Utilizei a fonte JetBrains Mono para garantir máxima legibilidade e
            um visual moderno. Melhora a experiência de leitura e dá um toque
            profissional ao design.
            </small>
          </div>

          <div className="w-full h-96 bg-[#3D3D3D] rounded-3xl flex items-end justify-center pb-20 text-foreground text-xl">
            #3D3D3D
          </div>
        </div>
      </div>
    </section>
  );
};
