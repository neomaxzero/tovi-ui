import { primaryArgb, textPrimary } from '~/components/shared/MainColors';

export default ` 
    .selectForm {
      margin-top: 0.5em;
    }

    .Select-control  {
      height: 100%;
      line-height: 3em;
    }

    .Select-input {
      height: 100%;
      padding-right: 1em !important;
      padding-left: 1em !important;
    }

    .Select-value {
      padding-right: 1em !important;
      padding-left: 1em !important;
    }
    
    .Select-value-label {
      font-size: 1.1em;
      line-height: 3em;
    }

    .Select-option.is-focused {
      background: ${primaryArgb`0.5`};
    }

    .is-focused:not(.is-open) > .Select-control {
      border-color: #CCC;
      box-shadow: none;
    }

    .Select-placeholder {
      line-height: 3em;
      padding-left: 1em;
      font-size: 1.1em;
      color: #777;
    }
`;