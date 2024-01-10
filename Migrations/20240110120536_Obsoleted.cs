using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace my_app.Migrations
{
    public partial class Obsoleted : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Obsoleted",
                table: "Times",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Obsoleted",
                table: "Times");
        }
    }
}
