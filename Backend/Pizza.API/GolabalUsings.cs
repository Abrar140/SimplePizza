// Core ASP.NET
global using Microsoft.AspNetCore.Mvc;
global using Microsoft.EntityFrameworkCore;


// Business layer
global using Pizza.Business.Interfaces;
global using Pizza.Business.Services;
global using Pizza.Business.Mapping;

// Data layer
global using Pizza.Data;
global using Pizza.Data.Interfaces;
global using Pizza.Data.Repositories;

// Common project
global using Pizza.Common.Dtos;
global using Pizza.Common.Models;

// AutoMapper
global using AutoMapper;

// System namespaces
global using System.Collections.Generic;
global using System.Threading.Tasks;
global using System.Text.Json.Serialization;
