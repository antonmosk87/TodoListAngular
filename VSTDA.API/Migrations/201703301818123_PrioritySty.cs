namespace VSTDA.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class PrioritySty : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.TodoItems", "PrioritySty", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.TodoItems", "PrioritySty");
        }
    }
}
