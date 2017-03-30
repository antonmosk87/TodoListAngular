using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VSTDA.API.Models
{
    public class TodoItem
    {
        public int TodoItemID { get; set; }

        public string Name { get; set; }

        public string PriorityNum { get; set; }

        public string PrioritySty { get; set; }
    }
}