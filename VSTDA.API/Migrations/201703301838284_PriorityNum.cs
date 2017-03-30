namespace VSTDA.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class PriorityNum : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.TodoItems", "PriorityNum", c => c.String());
            DropColumn("dbo.TodoItems", "Priority");
        }
        
        public override void Down()
        {
            AddColumn("dbo.TodoItems", "Priority", c => c.String());
            DropColumn("dbo.TodoItems", "PriorityNum");
        }
    }
}
