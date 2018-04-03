using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ContactBook.Core
{
    public class NonNegativeAttribute : ValidationAttribute
    {
        public override bool IsValid(object value)
        {
            bool valid = true;
            try
            {
                int val = (int)value;
                if(val < 0)
                {
                    valid = false;
                }
            }
            catch
            {
                valid = false;
            }
            return valid;
        }
    }
}