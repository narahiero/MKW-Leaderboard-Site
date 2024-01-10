using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace my_app.Migrations
{
    public partial class DeletedAt : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedAt",
                table: "Times",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedAt",
                table: "Players",
                type: "datetime2",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DeletedAt",
                table: "Times");

            migrationBuilder.DropColumn(
                name: "DeletedAt",
                table: "Players");
        }
    }
}
