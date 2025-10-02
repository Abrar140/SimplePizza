namespace Pizza.Business.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {

            //Entity->Dto

            CreateMap<PizzaEntity, PizzaDto>()
                .ForMember(dest => dest.CategoryName,

                opt => opt.MapFrom(src => src.Category.CategoryName));

            CreateMap<PizzaDto, PizzaEntity>();
            CreateMap<PizzaCreateModel, PizzaDto>();
            CreateMap<PizzaUpdateModel, PizzaDto>();


        }
    }
}
