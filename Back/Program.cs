
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Serialization;
using Repository;
using Service;
using System.Text.Json;
using System.Text.Json.Serialization;


var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);


builder.Services.AddCors(options =>
{
    options.AddPolicy(  MyAllowSpecificOrigins,
                        builder => builder
                            .AllowAnyMethod()
                            .AllowCredentials()
                            .SetIsOriginAllowed((host) => true)
                            .AllowAnyHeader()
                            .WithOrigins("http://localhost:4200/")
                            //.AllowAnyHeader()
                            );
});

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddMvc().AddJsonOptions(options => new JsonSerializerOptions {
                                                                                PropertyNameCaseInsensitive = false,
                                                                                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
                                                                                WriteIndented = true,
                                                                                DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
                                                                                AllowTrailingCommas = true,
                                                                                MaxDepth = 10,
                                                                                ReferenceHandler = ReferenceHandler.Preserve,
                                                                                Converters = { new JsonStringEnumConverter() }                                                                            
                                                                              });

builder.Services.AddDbContext<ApplicationContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
builder.Services.AddTransient<ISubscriberService, SubscriberService>();
builder.Services.AddTransient<ILoginService, LoginService>();
builder.Services.AddTransient<ISubscriberProfileService, SubscriberProfileService>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseCors(MyAllowSpecificOrigins);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();


