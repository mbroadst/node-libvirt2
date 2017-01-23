'use strict';
const XDR = require('js-xdr');

function setup($defs) {
  return XDR.config(xdr => {
    xdr.const('REMOTE_STRING_MAX', 4194304);
    xdr.const('REMOTE_DOMAIN_LIST_MAX', 16384);
    xdr.const('REMOTE_CPUMAP_MAX', 2048);
    xdr.const('REMOTE_VCPUINFO_MAX', 16384);
    xdr.const('REMOTE_CPUMAPS_MAX', 8388608);
    xdr.const('REMOTE_IOTHREAD_INFO_MAX', 16384);
    xdr.const('REMOTE_MIGRATE_COOKIE_MAX', 4194304);
    xdr.const('REMOTE_NETWORK_LIST_MAX', 16384);
    xdr.const('REMOTE_INTERFACE_LIST_MAX', 16384);
    xdr.const('REMOTE_STORAGE_POOL_LIST_MAX', 4096);
    xdr.const('REMOTE_STORAGE_VOL_LIST_MAX', 16384);
    xdr.const('REMOTE_NODE_DEVICE_LIST_MAX', 16384);
    xdr.const('REMOTE_NODE_DEVICE_CAPS_LIST_MAX', 65536);
    xdr.const('REMOTE_NWFILTER_LIST_MAX', 1024);
    xdr.const('REMOTE_DOMAIN_SCHEDULER_PARAMETERS_MAX', 16);
    xdr.const('REMOTE_DOMAIN_BLKIO_PARAMETERS_MAX', 16);
    xdr.const('REMOTE_DOMAIN_MEMORY_PARAMETERS_MAX', 16);
    xdr.const('REMOTE_DOMAIN_BLOCK_IO_TUNE_PARAMETERS_MAX', 32);
    xdr.const('REMOTE_DOMAIN_NUMA_PARAMETERS_MAX', 16);
    xdr.const('REMOTE_DOMAIN_PERF_EVENTS_MAX', 64);
    xdr.const('REMOTE_DOMAIN_BLOCK_COPY_PARAMETERS_MAX', 16);
    xdr.const('REMOTE_NODE_CPU_STATS_MAX', 16);
    xdr.const('REMOTE_NODE_MEMORY_STATS_MAX', 16);
    xdr.const('REMOTE_DOMAIN_BLOCK_STATS_PARAMETERS_MAX', 16);
    xdr.const('REMOTE_NODE_MAX_CELLS', 1024);
    xdr.const('REMOTE_AUTH_SASL_DATA_MAX', 65536);
    xdr.const('REMOTE_AUTH_TYPE_LIST_MAX', 20);
    xdr.const('REMOTE_DOMAIN_MEMORY_STATS_MAX', 1024);
    xdr.const('REMOTE_DOMAIN_SNAPSHOT_LIST_MAX', 1024);
    xdr.const('REMOTE_DOMAIN_BLOCK_PEEK_BUFFER_MAX', 4194304);
    xdr.const('REMOTE_DOMAIN_MEMORY_PEEK_BUFFER_MAX', 4194304);
    xdr.const('REMOTE_SECURITY_LABEL_LIST_MAX', 64);
    xdr.const('REMOTE_SECURITY_MODEL_MAX', $defs.VIR_SECURITY_MODEL_BUFLEN);
    xdr.const('REMOTE_SECURITY_LABEL_MAX', $defs.VIR_SECURITY_LABEL_BUFLEN);
    xdr.const('REMOTE_SECURITY_DOI_MAX', $defs.VIR_SECURITY_DOI_BUFLEN);
    xdr.const('REMOTE_SECRET_VALUE_MAX', 65536);
    xdr.const('REMOTE_SECRET_LIST_MAX', 16384);
    xdr.const('REMOTE_CPU_BASELINE_MAX', 256);
    xdr.const('REMOTE_DOMAIN_SEND_KEY_MAX', 16);
    xdr.const('REMOTE_DOMAIN_INTERFACE_PARAMETERS_MAX', 16);
    xdr.const('REMOTE_DOMAIN_GET_CPU_STATS_NCPUS_MAX', 128);
    xdr.const('REMOTE_DOMAIN_GET_CPU_STATS_MAX', 2048);
    xdr.const('REMOTE_DOMAIN_DISK_ERRORS_MAX', 256);
    xdr.const('REMOTE_NODE_MEMORY_PARAMETERS_MAX', 64);
    xdr.const('REMOTE_DOMAIN_MIGRATE_PARAM_LIST_MAX', 64);
    xdr.const('REMOTE_DOMAIN_JOB_STATS_MAX', 64);
    xdr.const('REMOTE_CONNECT_CPU_MODELS_MAX', 8192);
    xdr.const('REMOTE_DOMAIN_FSFREEZE_MOUNTPOINTS_MAX', 256);
    xdr.const('REMOTE_NETWORK_DHCP_LEASES_MAX', 65536);
    xdr.const('REMOTE_CONNECT_GET_ALL_DOMAIN_STATS_MAX', 4096);
    xdr.const('REMOTE_DOMAIN_EVENT_TUNABLE_MAX', 2048);
    xdr.const('REMOTE_DOMAIN_FSINFO_MAX', 256);
    xdr.const('REMOTE_DOMAIN_FSINFO_DISKS_MAX', 256);
    xdr.const('REMOTE_DOMAIN_INTERFACE_MAX', 2048);
    xdr.const('REMOTE_DOMAIN_IP_ADDR_MAX', 2048);
    xdr.const('REMOTE_DOMAIN_GUEST_VCPU_PARAMS_MAX', 64);
    xdr.const('REMOTE_DOMAIN_EVENT_GRAPHICS_IDENTITY_MAX', 20);
    xdr.const('REMOTE_PROGRAM', 0x20008086);
    xdr.const('REMOTE_PROTOCOL_VERSION', 1);

    xdr.typedef('remote_nonnull_string', xdr.varArray(xdr.string(), xdr.lookup('REMOTE_STRING_MAX')));
    xdr.typedef('remote_string', xdr.option(xdr.lookup('remote_nonnull_string')));
    xdr.typedef('remote_uuid', xdr.opaque($defs.VIR_UUID_BUFLEN));
    xdr.typedef('remote_domain', xdr.option(xdr.lookup('remote_nonnull_domain')));
    xdr.typedef('remote_network', xdr.option(xdr.lookup('remote_nonnull_network')));
    xdr.typedef('remote_nwfilter', xdr.option(xdr.lookup('remote_nonnull_nwfilter')));
    xdr.typedef('remote_storage_pool', xdr.option(xdr.lookup('remote_nonnull_storage_pool')));
    xdr.typedef('remote_storage_vol', xdr.option(xdr.lookup('remote_nonnull_storage_vol')));
    xdr.typedef('remote_node_device', xdr.option(xdr.lookup('remote_nonnull_node_device')));
    xdr.typedef('remote_secret', xdr.option(xdr.lookup('remote_nonnull_secret')));

    xdr.union('remote_typed_param_value', {
      switchOn: xdr.int(),
      switches: [
        [ $defs.VIR_TYPED_PARAM_INT, xdr.int() ],
        [ $defs.VIR_TYPED_PARAM_UINT, xdr.uint() ],
        [ $defs.VIR_TYPED_PARAM_LLONG, xdr.hyper() ],
        [ $defs.VIR_TYPED_PARAM_ULLONG, xdr.uhyper() ],
        [ $defs.VIR_TYPED_PARAM_DOUBLE, xdr.double() ],
        [ $defs.VIR_TYPED_PARAM_BOOLEAN, xdr.int() ],
        [ $defs.VIR_TYPED_PARAM_STRING, xdr.lookup('remote_nonnull_string') ]
      ]
    });

    xdr.struct('remote_nonnull_domain', [
      [ 'name', xdr.lookup('remote_nonnull_string') ],
      [ 'uuid', xdr.lookup('remote_uuid') ],
      [ 'id', xdr.int() ]
    ]);

    xdr.struct('remote_nonnull_network', [
      [ 'name', xdr.lookup('remote_nonnull_string') ],
      [ 'uuid', xdr.lookup('remote_uuid') ]
    ]);

    xdr.struct('remote_nonnull_nwfilter', [
      [ 'name', xdr.lookup('remote_nonnull_string') ],
      [ 'uuid', xdr.lookup('remote_uuid') ]
    ]);

    xdr.struct('remote_nonnull_interface', [
      [ 'name', xdr.lookup('remote_nonnull_string') ],
      [ 'mac', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_nonnull_storage_pool', [
      [ 'name', xdr.lookup('remote_nonnull_string') ],
      [ 'uuid', xdr.lookup('remote_uuid') ]
    ]);

    xdr.struct('remote_nonnull_storage_vol', [
      [ 'pool', xdr.lookup('remote_nonnull_string') ],
      [ 'name', xdr.lookup('remote_nonnull_string') ],
      [ 'key', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_nonnull_node_device', [
      [ 'name', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_nonnull_secret', [
      [ 'uuid', xdr.lookup('remote_uuid') ],
      [ 'usageType', xdr.int() ],
      [ 'usageID', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_nonnull_domain_snapshot', [
      [ 'name', xdr.lookup('remote_nonnull_string') ],
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_error', [
      [ 'code', xdr.int() ],
      [ 'domain', xdr.int() ],
      [ 'message', xdr.lookup('remote_string') ],
      [ 'level', xdr.int() ],
      [ 'dom', xdr.lookup('remote_domain') ],
      [ 'str1', xdr.lookup('remote_string') ],
      [ 'str2', xdr.lookup('remote_string') ],
      [ 'str3', xdr.lookup('remote_string') ],
      [ 'int1', xdr.int() ],
      [ 'int2', xdr.int() ],
      [ 'net', xdr.lookup('remote_network') ]
    ]);

    xdr.struct('remote_vcpu_info', [
      [ 'number', xdr.uint() ],
      [ 'state', xdr.int() ],
      [ 'cpu_time', xdr.uhyper() ],
      [ 'cpu', xdr.int() ]
    ]);

    xdr.struct('remote_typed_param', [
      [ 'field', xdr.lookup('remote_nonnull_string') ],
      [ 'value', xdr.lookup('remote_typed_param_value') ]
    ]);

    xdr.struct('remote_node_get_cpu_stats', [
      [ 'field', xdr.lookup('remote_nonnull_string') ],
      [ 'value', xdr.uhyper() ]
    ]);

    xdr.struct('remote_node_get_memory_stats', [
      [ 'field', xdr.lookup('remote_nonnull_string') ],
      [ 'value', xdr.uhyper() ]
    ]);

    xdr.struct('remote_domain_disk_error', [
      [ 'disk', xdr.lookup('remote_nonnull_string') ],
      [ 'error', xdr.int() ]
    ]);

    xdr.struct('remote_connect_open_args', [
      [ 'name', xdr.lookup('remote_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_connect_supports_feature_args', [
      [ 'feature', xdr.int() ]
    ]);

    xdr.struct('remote_connect_supports_feature_ret', [
      [ 'supported', xdr.int() ]
    ]);

    xdr.struct('remote_connect_get_type_ret', [
      [ 'type', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_connect_get_version_ret', [
      [ 'hv_ver', xdr.uhyper() ]
    ]);

    xdr.struct('remote_connect_get_lib_version_ret', [
      [ 'lib_ver', xdr.uhyper() ]
    ]);

    xdr.struct('remote_connect_get_hostname_ret', [
      [ 'hostname', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_connect_get_sysinfo_args', [
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_connect_get_sysinfo_ret', [
      [ 'sysinfo', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_connect_get_uri_ret', [
      [ 'uri', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_connect_get_max_vcpus_args', [
      [ 'type', xdr.lookup('remote_string') ]
    ]);

    xdr.struct('remote_connect_get_max_vcpus_ret', [
      [ 'max_vcpus', xdr.int() ]
    ]);

    // xdr.struct('remote_node_get_info_ret', [
    //   [ 'model', xdr.array(xdr.lookup('char'), 32) ],
    //   [ 'memory', xdr.uhyper() ],
    //   [ 'cpus', xdr.int() ],
    //   [ 'mhz', xdr.int() ],
    //   [ 'nodes', xdr.int() ],
    //   [ 'sockets', xdr.int() ],
    //   [ 'cores', xdr.int() ],
    //   [ 'threads', xdr.int() ]
    // ]);

    xdr.struct('remote_connect_get_capabilities_ret', [
      [ 'capabilities', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_connect_get_domain_capabilities_args', [
      [ 'emulatorbin', xdr.lookup('remote_string') ],
      [ 'arch', xdr.lookup('remote_string') ],
      [ 'machine', xdr.lookup('remote_string') ],
      [ 'virttype', xdr.lookup('remote_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_connect_get_domain_capabilities_ret', [
      [ 'capabilities', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_node_get_cpu_stats_args', [
      [ 'cpuNum', xdr.int() ],
      [ 'nparams', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_node_get_cpu_stats_ret', [
      [ 'params', xdr.varArray(xdr.lookup('remote_node_get_cpu_stats'), xdr.lookup('REMOTE_NODE_CPU_STATS_MAX')) ],
      [ 'nparams', xdr.int() ]
    ]);

    xdr.struct('remote_node_get_memory_stats_args', [
      [ 'nparams', xdr.int() ],
      [ 'cellNum', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_node_get_memory_stats_ret', [
      [ 'params', xdr.varArray(xdr.lookup('remote_node_get_memory_stats'), xdr.lookup('REMOTE_NODE_MEMORY_STATS_MAX')) ],
      [ 'nparams', xdr.int() ]
    ]);

    xdr.struct('remote_node_get_cells_free_memory_args', [
      [ 'startCell', xdr.int() ],
      [ 'maxcells', xdr.int() ]
    ]);

    xdr.struct('remote_node_get_cells_free_memory_ret', [
      [ 'cells', xdr.varArray(xdr.uhyper(), xdr.lookup('REMOTE_NODE_MAX_CELLS')) ]
    ]);

    xdr.struct('remote_node_get_free_memory_ret', [
      [ 'freeMem', xdr.uhyper() ]
    ]);

    xdr.struct('remote_domain_get_scheduler_type_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_get_scheduler_type_ret', [
      [ 'type', xdr.lookup('remote_nonnull_string') ],
      [ 'nparams', xdr.int() ]
    ]);

    xdr.struct('remote_domain_get_scheduler_parameters_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'nparams', xdr.int() ]
    ]);

    xdr.struct('remote_domain_get_scheduler_parameters_ret', [
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_DOMAIN_SCHEDULER_PARAMETERS_MAX')) ]
    ]);

    xdr.struct('remote_domain_get_scheduler_parameters_flags_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'nparams', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_scheduler_parameters_flags_ret', [
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_DOMAIN_SCHEDULER_PARAMETERS_MAX')) ]
    ]);

    xdr.struct('remote_domain_set_scheduler_parameters_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_DOMAIN_SCHEDULER_PARAMETERS_MAX')) ]
    ]);

    xdr.struct('remote_domain_set_scheduler_parameters_flags_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_DOMAIN_SCHEDULER_PARAMETERS_MAX')) ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_set_blkio_parameters_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_DOMAIN_BLKIO_PARAMETERS_MAX')) ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_blkio_parameters_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'nparams', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_blkio_parameters_ret', [
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_DOMAIN_BLKIO_PARAMETERS_MAX')) ],
      [ 'nparams', xdr.int() ]
    ]);

    xdr.struct('remote_domain_set_memory_parameters_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_DOMAIN_MEMORY_PARAMETERS_MAX')) ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_memory_parameters_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'nparams', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_memory_parameters_ret', [
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_DOMAIN_MEMORY_PARAMETERS_MAX')) ],
      [ 'nparams', xdr.int() ]
    ]);

    xdr.struct('remote_domain_block_resize_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'disk', xdr.lookup('remote_nonnull_string') ],
      [ 'size', xdr.uhyper() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_set_numa_parameters_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_DOMAIN_NUMA_PARAMETERS_MAX')) ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_numa_parameters_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'nparams', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_numa_parameters_ret', [
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_DOMAIN_NUMA_PARAMETERS_MAX')) ],
      [ 'nparams', xdr.int() ]
    ]);

    xdr.struct('remote_domain_set_perf_events_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_DOMAIN_PERF_EVENTS_MAX')) ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_perf_events_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_perf_events_ret', [
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_DOMAIN_PERF_EVENTS_MAX')) ]
    ]);

    xdr.struct('remote_domain_block_stats_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'path', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_domain_block_stats_ret', [
      [ 'rd_req', xdr.hyper() ],
      [ 'rd_bytes', xdr.hyper() ],
      [ 'wr_req', xdr.hyper() ],
      [ 'wr_bytes', xdr.hyper() ],
      [ 'errs', xdr.hyper() ]
    ]);

    xdr.struct('remote_domain_block_stats_flags_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'path', xdr.lookup('remote_nonnull_string') ],
      [ 'nparams', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_block_stats_flags_ret', [
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_DOMAIN_BLOCK_STATS_PARAMETERS_MAX')) ],
      [ 'nparams', xdr.int() ]
    ]);

    xdr.struct('remote_domain_interface_stats_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'path', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_domain_interface_stats_ret', [
      [ 'rx_bytes', xdr.hyper() ],
      [ 'rx_packets', xdr.hyper() ],
      [ 'rx_errs', xdr.hyper() ],
      [ 'rx_drop', xdr.hyper() ],
      [ 'tx_bytes', xdr.hyper() ],
      [ 'tx_packets', xdr.hyper() ],
      [ 'tx_errs', xdr.hyper() ],
      [ 'tx_drop', xdr.hyper() ]
    ]);

    xdr.struct('remote_domain_set_interface_parameters_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'device', xdr.lookup('remote_nonnull_string') ],
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_DOMAIN_INTERFACE_PARAMETERS_MAX')) ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_interface_parameters_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'device', xdr.lookup('remote_nonnull_string') ],
      [ 'nparams', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_interface_parameters_ret', [
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_DOMAIN_INTERFACE_PARAMETERS_MAX')) ],
      [ 'nparams', xdr.int() ]
    ]);

    xdr.struct('remote_domain_memory_stats_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'maxStats', xdr.uint() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_memory_stat', [
      [ 'tag', xdr.int() ],
      [ 'val', xdr.uhyper() ]
    ]);

    xdr.struct('remote_domain_memory_stats_ret', [
      [ 'stats', xdr.varArray(xdr.lookup('remote_domain_memory_stat'), xdr.lookup('REMOTE_DOMAIN_MEMORY_STATS_MAX')) ]
    ]);

    xdr.struct('remote_domain_block_peek_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'path', xdr.lookup('remote_nonnull_string') ],
      [ 'offset', xdr.uhyper() ],
      [ 'size', xdr.uint() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_block_peek_ret', [
      [ 'buffer', xdr.varOpaque(xdr.lookup('REMOTE_DOMAIN_BLOCK_PEEK_BUFFER_MAX')) ]
    ]);

    xdr.struct('remote_domain_memory_peek_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'offset', xdr.uhyper() ],
      [ 'size', xdr.uint() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_memory_peek_ret', [
      [ 'buffer', xdr.varOpaque(xdr.lookup('REMOTE_DOMAIN_MEMORY_PEEK_BUFFER_MAX')) ]
    ]);

    xdr.struct('remote_domain_get_block_info_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'path', xdr.lookup('remote_nonnull_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_block_info_ret', [
      [ 'allocation', xdr.uhyper() ],
      [ 'capacity', xdr.uhyper() ],
      [ 'physical', xdr.uhyper() ]
    ]);

    xdr.struct('remote_connect_list_domains_args', [
      [ 'maxids', xdr.int() ]
    ]);

    xdr.struct('remote_connect_list_domains_ret', [
      [ 'ids', xdr.varArray(xdr.int(), xdr.lookup('REMOTE_DOMAIN_LIST_MAX')) ]
    ]);

    xdr.struct('remote_connect_num_of_domains_ret', [
      [ 'num', xdr.int() ]
    ]);

    xdr.struct('remote_domain_create_xml_args', [
      [ 'xml_desc', xdr.lookup('remote_nonnull_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_create_xml_ret', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_create_xml_with_files_args', [
      [ 'xml_desc', xdr.lookup('remote_nonnull_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_create_xml_with_files_ret', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_lookup_by_id_args', [
      [ 'id', xdr.int() ]
    ]);

    xdr.struct('remote_domain_lookup_by_id_ret', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_lookup_by_uuid_args', [
      [ 'uuid', xdr.lookup('remote_uuid') ]
    ]);

    xdr.struct('remote_domain_lookup_by_uuid_ret', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_lookup_by_name_args', [
      [ 'name', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_domain_lookup_by_name_ret', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_suspend_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_resume_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_pm_suspend_for_duration_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'target', xdr.uint() ],
      [ 'duration', xdr.uhyper() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_pm_wakeup_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_shutdown_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_reboot_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_reset_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_destroy_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_destroy_flags_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_os_type_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_get_os_type_ret', [
      [ 'type', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_domain_get_max_memory_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_get_max_memory_ret', [
      [ 'memory', xdr.uhyper() ]
    ]);

    xdr.struct('remote_domain_set_max_memory_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'memory', xdr.uhyper() ]
    ]);

    xdr.struct('remote_domain_set_memory_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'memory', xdr.uhyper() ]
    ]);

    xdr.struct('remote_domain_set_memory_flags_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'memory', xdr.uhyper() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_set_memory_stats_period_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'period', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_info_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    // xdr.struct('remote_domain_get_info_ret', [
    //   [ 'state', xdr.lookup('unsigned char') ],
    //   [ 'maxMem', xdr.uhyper() ],
    //   [ 'memory', xdr.uhyper() ],
    //   [ 'nrVirtCpu', xdr.lookup('unsigned short') ],
    //   [ 'cpuTime', xdr.uhyper() ]
    // ]);

    xdr.struct('remote_domain_save_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'to', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_domain_save_flags_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'to', xdr.lookup('remote_nonnull_string') ],
      [ 'dxml', xdr.lookup('remote_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_restore_args', [
      [ 'from', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_domain_restore_flags_args', [
      [ 'from', xdr.lookup('remote_nonnull_string') ],
      [ 'dxml', xdr.lookup('remote_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_save_image_get_xml_desc_args', [
      [ 'file', xdr.lookup('remote_nonnull_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_save_image_get_xml_desc_ret', [
      [ 'xml', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_domain_save_image_define_xml_args', [
      [ 'file', xdr.lookup('remote_nonnull_string') ],
      [ 'dxml', xdr.lookup('remote_nonnull_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_core_dump_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'to', xdr.lookup('remote_nonnull_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_core_dump_with_format_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'to', xdr.lookup('remote_nonnull_string') ],
      [ 'dumpformat', xdr.uint() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_screenshot_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'screen', xdr.uint() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_screenshot_ret', [
      [ 'mime', xdr.lookup('remote_string') ]
    ]);

    xdr.struct('remote_domain_get_xml_desc_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_xml_desc_ret', [
      [ 'xml', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_domain_migrate_prepare_args', [
      [ 'uri_in', xdr.lookup('remote_string') ],
      [ 'flags', xdr.uhyper() ],
      [ 'dname', xdr.lookup('remote_string') ],
      [ 'resource', xdr.uhyper() ]
    ]);

    xdr.struct('remote_domain_migrate_prepare_ret', [
      [ 'cookie', xdr.varOpaque(xdr.lookup('REMOTE_MIGRATE_COOKIE_MAX')) ],
      [ 'uri_out', xdr.lookup('remote_string') ]
    ]);

    xdr.struct('remote_domain_migrate_perform_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'cookie', xdr.varOpaque(xdr.lookup('REMOTE_MIGRATE_COOKIE_MAX')) ],
      [ 'uri', xdr.lookup('remote_nonnull_string') ],
      [ 'flags', xdr.uhyper() ],
      [ 'dname', xdr.lookup('remote_string') ],
      [ 'resource', xdr.uhyper() ]
    ]);

    xdr.struct('remote_domain_migrate_finish_args', [
      [ 'dname', xdr.lookup('remote_nonnull_string') ],
      [ 'cookie', xdr.varOpaque(xdr.lookup('REMOTE_MIGRATE_COOKIE_MAX')) ],
      [ 'uri', xdr.lookup('remote_nonnull_string') ],
      [ 'flags', xdr.uhyper() ]
    ]);

    xdr.struct('remote_domain_migrate_finish_ret', [
      [ 'ddom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_migrate_prepare2_args', [
      [ 'uri_in', xdr.lookup('remote_string') ],
      [ 'flags', xdr.uhyper() ],
      [ 'dname', xdr.lookup('remote_string') ],
      [ 'resource', xdr.uhyper() ],
      [ 'dom_xml', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_domain_migrate_prepare2_ret', [
      [ 'cookie', xdr.varOpaque(xdr.lookup('REMOTE_MIGRATE_COOKIE_MAX')) ],
      [ 'uri_out', xdr.lookup('remote_string') ]
    ]);

    xdr.struct('remote_domain_migrate_finish2_args', [
      [ 'dname', xdr.lookup('remote_nonnull_string') ],
      [ 'cookie', xdr.varOpaque(xdr.lookup('REMOTE_MIGRATE_COOKIE_MAX')) ],
      [ 'uri', xdr.lookup('remote_nonnull_string') ],
      [ 'flags', xdr.uhyper() ],
      [ 'retcode', xdr.int() ]
    ]);

    xdr.struct('remote_domain_migrate_finish2_ret', [
      [ 'ddom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_connect_list_defined_domains_args', [
      [ 'maxnames', xdr.int() ]
    ]);

    xdr.struct('remote_connect_list_defined_domains_ret', [
      [ 'names', xdr.varArray(xdr.lookup('remote_nonnull_string'), xdr.lookup('REMOTE_DOMAIN_LIST_MAX')) ]
    ]);

    xdr.struct('remote_connect_num_of_defined_domains_ret', [
      [ 'num', xdr.int() ]
    ]);

    xdr.struct('remote_domain_create_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_create_with_flags_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_create_with_flags_ret', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_create_with_files_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_create_with_files_ret', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_define_xml_args', [
      [ 'xml', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_domain_define_xml_ret', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_define_xml_flags_args', [
      [ 'xml', xdr.lookup('remote_nonnull_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_define_xml_flags_ret', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_undefine_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_undefine_flags_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_inject_nmi_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_send_key_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'codeset', xdr.uint() ],
      [ 'holdtime', xdr.uint() ],
      [ 'keycodes', xdr.varArray(xdr.uint(), xdr.lookup('REMOTE_DOMAIN_SEND_KEY_MAX')) ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_send_process_signal_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'pid_value', xdr.hyper() ],
      [ 'signum', xdr.uint() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_set_vcpus_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'nvcpus', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_set_vcpus_flags_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'nvcpus', xdr.uint() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_vcpus_flags_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_vcpus_flags_ret', [
      [ 'num', xdr.int() ]
    ]);

    xdr.struct('remote_domain_pin_vcpu_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'vcpu', xdr.uint() ],
      [ 'cpumap', xdr.varOpaque(xdr.lookup('REMOTE_CPUMAP_MAX')) ]
    ]);

    xdr.struct('remote_domain_pin_vcpu_flags_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'vcpu', xdr.uint() ],
      [ 'cpumap', xdr.varOpaque(xdr.lookup('REMOTE_CPUMAP_MAX')) ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_vcpu_pin_info_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'ncpumaps', xdr.int() ],
      [ 'maplen', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_vcpu_pin_info_ret', [
      [ 'cpumaps', xdr.varOpaque(xdr.lookup('REMOTE_CPUMAPS_MAX')) ],
      [ 'num', xdr.int() ]
    ]);

    xdr.struct('remote_domain_pin_emulator_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'cpumap', xdr.varOpaque(xdr.lookup('REMOTE_CPUMAP_MAX')) ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_emulator_pin_info_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'maplen', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_emulator_pin_info_ret', [
      [ 'cpumaps', xdr.varOpaque(xdr.lookup('REMOTE_CPUMAPS_MAX')) ],
      [ 'ret', xdr.int() ]
    ]);

    xdr.struct('remote_domain_get_vcpus_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'maxinfo', xdr.int() ],
      [ 'maplen', xdr.int() ]
    ]);

    xdr.struct('remote_domain_get_vcpus_ret', [
      [ 'info', xdr.varArray(xdr.lookup('remote_vcpu_info'), xdr.lookup('REMOTE_VCPUINFO_MAX')) ],
      [ 'cpumaps', xdr.varOpaque(xdr.lookup('REMOTE_CPUMAPS_MAX')) ]
    ]);

    xdr.struct('remote_domain_get_max_vcpus_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_get_max_vcpus_ret', [
      [ 'num', xdr.int() ]
    ]);

    xdr.struct('remote_domain_iothread_info', [
      [ 'iothread_id', xdr.uint() ],
      [ 'cpumap', xdr.varOpaque(xdr.lookup('REMOTE_CPUMAP_MAX')) ]
    ]);

    xdr.struct('remote_domain_get_iothread_info_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_iothread_info_ret', [
      [ 'info', xdr.varArray(xdr.lookup('remote_domain_iothread_info'), xdr.lookup('REMOTE_IOTHREAD_INFO_MAX')) ],
      [ 'ret', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_pin_iothread_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'iothreads_id', xdr.uint() ],
      [ 'cpumap', xdr.varOpaque(xdr.lookup('REMOTE_CPUMAP_MAX')) ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_add_iothread_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'iothread_id', xdr.uint() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_del_iothread_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'iothread_id', xdr.uint() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_security_label_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    // xdr.struct('remote_domain_get_security_label_ret', [
    //   [ 'label', xdr.varArray(xdr.lookup('char'), xdr.lookup('REMOTE_SECURITY_LABEL_MAX')) ],
    //   [ 'enforcing', xdr.int() ]
    // ]);

    xdr.struct('remote_domain_get_security_label_list_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    // xdr.struct('remote_domain_get_security_label_list_ret', [
    //   [ 'labels', xdr.varArray(xdr.lookup('remote_domain_get_security_label_ret'), xdr.lookup('REMOTE_SECURITY_LABEL_LIST_MAX')) ],
    //   [ 'ret', xdr.int() ]
    // ]);

    // xdr.struct('remote_node_get_security_model_ret', [
    //   [ 'model', xdr.varArray(xdr.lookup('char'), xdr.lookup('REMOTE_SECURITY_MODEL_MAX')) ],
    //   [ 'doi', xdr.varArray(xdr.lookup('char'), xdr.lookup('REMOTE_SECURITY_DOI_MAX')) ]
    // ]);

    xdr.struct('remote_domain_attach_device_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'xml', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_domain_attach_device_flags_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'xml', xdr.lookup('remote_nonnull_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_detach_device_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'xml', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_domain_detach_device_flags_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'xml', xdr.lookup('remote_nonnull_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_update_device_flags_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'xml', xdr.lookup('remote_nonnull_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_autostart_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_get_autostart_ret', [
      [ 'autostart', xdr.int() ]
    ]);

    xdr.struct('remote_domain_set_autostart_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'autostart', xdr.int() ]
    ]);

    xdr.struct('remote_domain_set_metadata_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'type', xdr.int() ],
      [ 'metadata', xdr.lookup('remote_string') ],
      [ 'key', xdr.lookup('remote_string') ],
      [ 'uri', xdr.lookup('remote_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_metadata_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'type', xdr.int() ],
      [ 'uri', xdr.lookup('remote_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_metadata_ret', [
      [ 'metadata', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_domain_block_job_abort_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'path', xdr.lookup('remote_nonnull_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_block_job_info_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'path', xdr.lookup('remote_nonnull_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_block_job_info_ret', [
      [ 'found', xdr.int() ],
      [ 'type', xdr.int() ],
      [ 'bandwidth', xdr.uhyper() ],
      [ 'cur', xdr.uhyper() ],
      [ 'end', xdr.uhyper() ]
    ]);

    xdr.struct('remote_domain_block_job_set_speed_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'path', xdr.lookup('remote_nonnull_string') ],
      [ 'bandwidth', xdr.uhyper() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_block_pull_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'path', xdr.lookup('remote_nonnull_string') ],
      [ 'bandwidth', xdr.uhyper() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_block_rebase_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'path', xdr.lookup('remote_nonnull_string') ],
      [ 'base', xdr.lookup('remote_string') ],
      [ 'bandwidth', xdr.uhyper() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_block_copy_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'path', xdr.lookup('remote_nonnull_string') ],
      [ 'destxml', xdr.lookup('remote_nonnull_string') ],
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_DOMAIN_BLOCK_COPY_PARAMETERS_MAX')) ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_block_commit_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'disk', xdr.lookup('remote_nonnull_string') ],
      [ 'base', xdr.lookup('remote_string') ],
      [ 'top', xdr.lookup('remote_string') ],
      [ 'bandwidth', xdr.uhyper() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_set_block_io_tune_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'disk', xdr.lookup('remote_nonnull_string') ],
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_DOMAIN_BLOCK_IO_TUNE_PARAMETERS_MAX')) ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_block_io_tune_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'disk', xdr.lookup('remote_string') ],
      [ 'nparams', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_block_io_tune_ret', [
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_DOMAIN_BLOCK_IO_TUNE_PARAMETERS_MAX')) ],
      [ 'nparams', xdr.int() ]
    ]);

    xdr.struct('remote_domain_get_cpu_stats_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'nparams', xdr.uint() ],
      [ 'start_cpu', xdr.int() ],
      [ 'ncpus', xdr.uint() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_cpu_stats_ret', [
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_DOMAIN_GET_CPU_STATS_MAX')) ],
      [ 'nparams', xdr.int() ]
    ]);

    xdr.struct('remote_domain_get_hostname_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_hostname_ret', [
      [ 'hostname', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_connect_num_of_networks_ret', [
      [ 'num', xdr.int() ]
    ]);

    xdr.struct('remote_connect_list_networks_args', [
      [ 'maxnames', xdr.int() ]
    ]);

    xdr.struct('remote_connect_list_networks_ret', [
      [ 'names', xdr.varArray(xdr.lookup('remote_nonnull_string'), xdr.lookup('REMOTE_NETWORK_LIST_MAX')) ]
    ]);

    xdr.struct('remote_connect_num_of_defined_networks_ret', [
      [ 'num', xdr.int() ]
    ]);

    xdr.struct('remote_connect_list_defined_networks_args', [
      [ 'maxnames', xdr.int() ]
    ]);

    xdr.struct('remote_connect_list_defined_networks_ret', [
      [ 'names', xdr.varArray(xdr.lookup('remote_nonnull_string'), xdr.lookup('REMOTE_NETWORK_LIST_MAX')) ]
    ]);

    xdr.struct('remote_network_lookup_by_uuid_args', [
      [ 'uuid', xdr.lookup('remote_uuid') ]
    ]);

    xdr.struct('remote_network_lookup_by_uuid_ret', [
      [ 'net', xdr.lookup('remote_nonnull_network') ]
    ]);

    xdr.struct('remote_network_lookup_by_name_args', [
      [ 'name', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_network_lookup_by_name_ret', [
      [ 'net', xdr.lookup('remote_nonnull_network') ]
    ]);

    xdr.struct('remote_network_create_xml_args', [
      [ 'xml', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_network_create_xml_ret', [
      [ 'net', xdr.lookup('remote_nonnull_network') ]
    ]);

    xdr.struct('remote_network_define_xml_args', [
      [ 'xml', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_network_define_xml_ret', [
      [ 'net', xdr.lookup('remote_nonnull_network') ]
    ]);

    xdr.struct('remote_network_undefine_args', [
      [ 'net', xdr.lookup('remote_nonnull_network') ]
    ]);

    xdr.struct('remote_network_update_args', [
      [ 'net', xdr.lookup('remote_nonnull_network') ],
      [ 'command', xdr.uint() ],
      [ 'section', xdr.uint() ],
      [ 'parentIndex', xdr.int() ],
      [ 'xml', xdr.lookup('remote_nonnull_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_network_create_args', [
      [ 'net', xdr.lookup('remote_nonnull_network') ]
    ]);

    xdr.struct('remote_network_destroy_args', [
      [ 'net', xdr.lookup('remote_nonnull_network') ]
    ]);

    xdr.struct('remote_network_get_xml_desc_args', [
      [ 'net', xdr.lookup('remote_nonnull_network') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_network_get_xml_desc_ret', [
      [ 'xml', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_network_get_bridge_name_args', [
      [ 'net', xdr.lookup('remote_nonnull_network') ]
    ]);

    xdr.struct('remote_network_get_bridge_name_ret', [
      [ 'name', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_network_get_autostart_args', [
      [ 'net', xdr.lookup('remote_nonnull_network') ]
    ]);

    xdr.struct('remote_network_get_autostart_ret', [
      [ 'autostart', xdr.int() ]
    ]);

    xdr.struct('remote_network_set_autostart_args', [
      [ 'net', xdr.lookup('remote_nonnull_network') ],
      [ 'autostart', xdr.int() ]
    ]);

    xdr.struct('remote_connect_num_of_nwfilters_ret', [
      [ 'num', xdr.int() ]
    ]);

    xdr.struct('remote_connect_list_nwfilters_args', [
      [ 'maxnames', xdr.int() ]
    ]);

    xdr.struct('remote_connect_list_nwfilters_ret', [
      [ 'names', xdr.varArray(xdr.lookup('remote_nonnull_string'), xdr.lookup('REMOTE_NWFILTER_LIST_MAX')) ]
    ]);

    xdr.struct('remote_nwfilter_lookup_by_uuid_args', [
      [ 'uuid', xdr.lookup('remote_uuid') ]
    ]);

    xdr.struct('remote_nwfilter_lookup_by_uuid_ret', [
      [ 'nwfilter', xdr.lookup('remote_nonnull_nwfilter') ]
    ]);

    xdr.struct('remote_nwfilter_lookup_by_name_args', [
      [ 'name', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_nwfilter_lookup_by_name_ret', [
      [ 'nwfilter', xdr.lookup('remote_nonnull_nwfilter') ]
    ]);

    xdr.struct('remote_nwfilter_define_xml_args', [
      [ 'xml', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_nwfilter_define_xml_ret', [
      [ 'nwfilter', xdr.lookup('remote_nonnull_nwfilter') ]
    ]);

    xdr.struct('remote_nwfilter_undefine_args', [
      [ 'nwfilter', xdr.lookup('remote_nonnull_nwfilter') ]
    ]);

    xdr.struct('remote_nwfilter_get_xml_desc_args', [
      [ 'nwfilter', xdr.lookup('remote_nonnull_nwfilter') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_nwfilter_get_xml_desc_ret', [
      [ 'xml', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_connect_num_of_interfaces_ret', [
      [ 'num', xdr.int() ]
    ]);

    xdr.struct('remote_connect_list_interfaces_args', [
      [ 'maxnames', xdr.int() ]
    ]);

    xdr.struct('remote_connect_list_interfaces_ret', [
      [ 'names', xdr.varArray(xdr.lookup('remote_nonnull_string'), xdr.lookup('REMOTE_INTERFACE_LIST_MAX')) ]
    ]);

    xdr.struct('remote_connect_num_of_defined_interfaces_ret', [
      [ 'num', xdr.int() ]
    ]);

    xdr.struct('remote_connect_list_defined_interfaces_args', [
      [ 'maxnames', xdr.int() ]
    ]);

    xdr.struct('remote_connect_list_defined_interfaces_ret', [
      [ 'names', xdr.varArray(xdr.lookup('remote_nonnull_string'), xdr.lookup('REMOTE_INTERFACE_LIST_MAX')) ]
    ]);

    xdr.struct('remote_interface_lookup_by_name_args', [
      [ 'name', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_interface_lookup_by_name_ret', [
      [ 'iface', xdr.lookup('remote_nonnull_interface') ]
    ]);

    xdr.struct('remote_interface_lookup_by_mac_string_args', [
      [ 'mac', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_interface_lookup_by_mac_string_ret', [
      [ 'iface', xdr.lookup('remote_nonnull_interface') ]
    ]);

    xdr.struct('remote_interface_get_xml_desc_args', [
      [ 'iface', xdr.lookup('remote_nonnull_interface') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_interface_get_xml_desc_ret', [
      [ 'xml', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_interface_define_xml_args', [
      [ 'xml', xdr.lookup('remote_nonnull_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_interface_define_xml_ret', [
      [ 'iface', xdr.lookup('remote_nonnull_interface') ]
    ]);

    xdr.struct('remote_interface_undefine_args', [
      [ 'iface', xdr.lookup('remote_nonnull_interface') ]
    ]);

    xdr.struct('remote_interface_create_args', [
      [ 'iface', xdr.lookup('remote_nonnull_interface') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_interface_destroy_args', [
      [ 'iface', xdr.lookup('remote_nonnull_interface') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_interface_change_begin_args', [
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_interface_change_commit_args', [
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_interface_change_rollback_args', [
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_auth_list_ret', [
      [ 'types', xdr.varArray(xdr.lookup('remote_auth_type'), xdr.lookup('REMOTE_AUTH_TYPE_LIST_MAX')) ]
    ]);

    xdr.struct('remote_auth_sasl_init_ret', [
      [ 'mechlist', xdr.lookup('remote_nonnull_string') ]
    ]);

    // xdr.struct('remote_auth_sasl_start_args', [
    //   [ 'mech', xdr.lookup('remote_nonnull_string') ],
    //   [ 'nil', xdr.int() ],
    //   [ 'data', xdr.varArray(xdr.lookup('char'), xdr.lookup('REMOTE_AUTH_SASL_DATA_MAX')) ]
    // ]);

    // xdr.struct('remote_auth_sasl_start_ret', [
    //   [ 'complete', xdr.int() ],
    //   [ 'nil', xdr.int() ],
    //   [ 'data', xdr.varArray(xdr.lookup('char'), xdr.lookup('REMOTE_AUTH_SASL_DATA_MAX')) ]
    // ]);

    // xdr.struct('remote_auth_sasl_step_args', [
    //   [ 'nil', xdr.int() ],
    //   [ 'data', xdr.varArray(xdr.lookup('char'), xdr.lookup('REMOTE_AUTH_SASL_DATA_MAX')) ]
    // ]);

    // xdr.struct('remote_auth_sasl_step_ret', [
    //   [ 'complete', xdr.int() ],
    //   [ 'nil', xdr.int() ],
    //   [ 'data', xdr.varArray(xdr.lookup('char'), xdr.lookup('REMOTE_AUTH_SASL_DATA_MAX')) ]
    // ]);

    xdr.struct('remote_auth_polkit_ret', [
      [ 'complete', xdr.int() ]
    ]);

    xdr.struct('remote_connect_num_of_storage_pools_ret', [
      [ 'num', xdr.int() ]
    ]);

    xdr.struct('remote_connect_list_storage_pools_args', [
      [ 'maxnames', xdr.int() ]
    ]);

    xdr.struct('remote_connect_list_storage_pools_ret', [
      [ 'names', xdr.varArray(xdr.lookup('remote_nonnull_string'), xdr.lookup('REMOTE_STORAGE_POOL_LIST_MAX')) ]
    ]);

    xdr.struct('remote_connect_num_of_defined_storage_pools_ret', [
      [ 'num', xdr.int() ]
    ]);

    xdr.struct('remote_connect_list_defined_storage_pools_args', [
      [ 'maxnames', xdr.int() ]
    ]);

    xdr.struct('remote_connect_list_defined_storage_pools_ret', [
      [ 'names', xdr.varArray(xdr.lookup('remote_nonnull_string'), xdr.lookup('REMOTE_STORAGE_POOL_LIST_MAX')) ]
    ]);

    xdr.struct('remote_connect_find_storage_pool_sources_args', [
      [ 'type', xdr.lookup('remote_nonnull_string') ],
      [ 'srcSpec', xdr.lookup('remote_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_connect_find_storage_pool_sources_ret', [
      [ 'xml', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_storage_pool_lookup_by_uuid_args', [
      [ 'uuid', xdr.lookup('remote_uuid') ]
    ]);

    xdr.struct('remote_storage_pool_lookup_by_uuid_ret', [
      [ 'pool', xdr.lookup('remote_nonnull_storage_pool') ]
    ]);

    xdr.struct('remote_storage_pool_lookup_by_name_args', [
      [ 'name', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_storage_pool_lookup_by_name_ret', [
      [ 'pool', xdr.lookup('remote_nonnull_storage_pool') ]
    ]);

    xdr.struct('remote_storage_pool_lookup_by_volume_args', [
      [ 'vol', xdr.lookup('remote_nonnull_storage_vol') ]
    ]);

    xdr.struct('remote_storage_pool_lookup_by_volume_ret', [
      [ 'pool', xdr.lookup('remote_nonnull_storage_pool') ]
    ]);

    xdr.struct('remote_storage_pool_create_xml_args', [
      [ 'xml', xdr.lookup('remote_nonnull_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_storage_pool_create_xml_ret', [
      [ 'pool', xdr.lookup('remote_nonnull_storage_pool') ]
    ]);

    xdr.struct('remote_storage_pool_define_xml_args', [
      [ 'xml', xdr.lookup('remote_nonnull_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_storage_pool_define_xml_ret', [
      [ 'pool', xdr.lookup('remote_nonnull_storage_pool') ]
    ]);

    xdr.struct('remote_storage_pool_build_args', [
      [ 'pool', xdr.lookup('remote_nonnull_storage_pool') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_storage_pool_undefine_args', [
      [ 'pool', xdr.lookup('remote_nonnull_storage_pool') ]
    ]);

    xdr.struct('remote_storage_pool_create_args', [
      [ 'pool', xdr.lookup('remote_nonnull_storage_pool') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_storage_pool_destroy_args', [
      [ 'pool', xdr.lookup('remote_nonnull_storage_pool') ]
    ]);

    xdr.struct('remote_storage_pool_delete_args', [
      [ 'pool', xdr.lookup('remote_nonnull_storage_pool') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_storage_pool_refresh_args', [
      [ 'pool', xdr.lookup('remote_nonnull_storage_pool') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_storage_pool_get_xml_desc_args', [
      [ 'pool', xdr.lookup('remote_nonnull_storage_pool') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_storage_pool_get_xml_desc_ret', [
      [ 'xml', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_storage_pool_get_info_args', [
      [ 'pool', xdr.lookup('remote_nonnull_storage_pool') ]
    ]);

    // xdr.struct('remote_storage_pool_get_info_ret', [
    //   [ 'state', xdr.lookup('unsigned char') ],
    //   [ 'capacity', xdr.uhyper() ],
    //   [ 'allocation', xdr.uhyper() ],
    //   [ 'available', xdr.uhyper() ]
    // ]);

    xdr.struct('remote_storage_pool_get_autostart_args', [
      [ 'pool', xdr.lookup('remote_nonnull_storage_pool') ]
    ]);

    xdr.struct('remote_storage_pool_get_autostart_ret', [
      [ 'autostart', xdr.int() ]
    ]);

    xdr.struct('remote_storage_pool_set_autostart_args', [
      [ 'pool', xdr.lookup('remote_nonnull_storage_pool') ],
      [ 'autostart', xdr.int() ]
    ]);

    xdr.struct('remote_storage_pool_num_of_volumes_args', [
      [ 'pool', xdr.lookup('remote_nonnull_storage_pool') ]
    ]);

    xdr.struct('remote_storage_pool_num_of_volumes_ret', [
      [ 'num', xdr.int() ]
    ]);

    xdr.struct('remote_storage_pool_list_volumes_args', [
      [ 'pool', xdr.lookup('remote_nonnull_storage_pool') ],
      [ 'maxnames', xdr.int() ]
    ]);

    xdr.struct('remote_storage_pool_list_volumes_ret', [
      [ 'names', xdr.varArray(xdr.lookup('remote_nonnull_string'), xdr.lookup('REMOTE_STORAGE_VOL_LIST_MAX')) ]
    ]);

    xdr.struct('remote_storage_vol_lookup_by_name_args', [
      [ 'pool', xdr.lookup('remote_nonnull_storage_pool') ],
      [ 'name', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_storage_vol_lookup_by_name_ret', [
      [ 'vol', xdr.lookup('remote_nonnull_storage_vol') ]
    ]);

    xdr.struct('remote_storage_vol_lookup_by_key_args', [
      [ 'key', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_storage_vol_lookup_by_key_ret', [
      [ 'vol', xdr.lookup('remote_nonnull_storage_vol') ]
    ]);

    xdr.struct('remote_storage_vol_lookup_by_path_args', [
      [ 'path', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_storage_vol_lookup_by_path_ret', [
      [ 'vol', xdr.lookup('remote_nonnull_storage_vol') ]
    ]);

    xdr.struct('remote_storage_vol_create_xml_args', [
      [ 'pool', xdr.lookup('remote_nonnull_storage_pool') ],
      [ 'xml', xdr.lookup('remote_nonnull_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_storage_vol_create_xml_ret', [
      [ 'vol', xdr.lookup('remote_nonnull_storage_vol') ]
    ]);

    xdr.struct('remote_storage_vol_create_xml_from_args', [
      [ 'pool', xdr.lookup('remote_nonnull_storage_pool') ],
      [ 'xml', xdr.lookup('remote_nonnull_string') ],
      [ 'clonevol', xdr.lookup('remote_nonnull_storage_vol') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_storage_vol_create_xml_from_ret', [
      [ 'vol', xdr.lookup('remote_nonnull_storage_vol') ]
    ]);

    xdr.struct('remote_storage_vol_delete_args', [
      [ 'vol', xdr.lookup('remote_nonnull_storage_vol') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_storage_vol_wipe_args', [
      [ 'vol', xdr.lookup('remote_nonnull_storage_vol') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_storage_vol_wipe_pattern_args', [
      [ 'vol', xdr.lookup('remote_nonnull_storage_vol') ],
      [ 'algorithm', xdr.uint() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_storage_vol_get_xml_desc_args', [
      [ 'vol', xdr.lookup('remote_nonnull_storage_vol') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_storage_vol_get_xml_desc_ret', [
      [ 'xml', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_storage_vol_get_info_args', [
      [ 'vol', xdr.lookup('remote_nonnull_storage_vol') ]
    ]);

    // xdr.struct('remote_storage_vol_get_info_ret', [
    //   [ 'type', xdr.lookup('char') ],
    //   [ 'capacity', xdr.uhyper() ],
    //   [ 'allocation', xdr.uhyper() ]
    // ]);

    xdr.struct('remote_storage_vol_get_info_flags_args', [
      [ 'vol', xdr.lookup('remote_nonnull_storage_vol') ],
      [ 'flags', xdr.uint() ]
    ]);

    // xdr.struct('remote_storage_vol_get_info_flags_ret', [
    //   [ 'type', xdr.lookup('char') ],
    //   [ 'capacity', xdr.uhyper() ],
    //   [ 'allocation', xdr.uhyper() ]
    // ]);

    xdr.struct('remote_storage_vol_get_path_args', [
      [ 'vol', xdr.lookup('remote_nonnull_storage_vol') ]
    ]);

    xdr.struct('remote_storage_vol_get_path_ret', [
      [ 'name', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_storage_vol_resize_args', [
      [ 'vol', xdr.lookup('remote_nonnull_storage_vol') ],
      [ 'capacity', xdr.uhyper() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_node_num_of_devices_args', [
      [ 'cap', xdr.lookup('remote_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_node_num_of_devices_ret', [
      [ 'num', xdr.int() ]
    ]);

    xdr.struct('remote_node_list_devices_args', [
      [ 'cap', xdr.lookup('remote_string') ],
      [ 'maxnames', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_node_list_devices_ret', [
      [ 'names', xdr.varArray(xdr.lookup('remote_nonnull_string'), xdr.lookup('REMOTE_NODE_DEVICE_LIST_MAX')) ]
    ]);

    xdr.struct('remote_node_device_lookup_by_name_args', [
      [ 'name', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_node_device_lookup_by_name_ret', [
      [ 'dev', xdr.lookup('remote_nonnull_node_device') ]
    ]);

    xdr.struct('remote_node_device_lookup_scsi_host_by_wwn_args', [
      [ 'wwnn', xdr.lookup('remote_nonnull_string') ],
      [ 'wwpn', xdr.lookup('remote_nonnull_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_node_device_lookup_scsi_host_by_wwn_ret', [
      [ 'dev', xdr.lookup('remote_nonnull_node_device') ]
    ]);

    xdr.struct('remote_node_device_get_xml_desc_args', [
      [ 'name', xdr.lookup('remote_nonnull_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_node_device_get_xml_desc_ret', [
      [ 'xml', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_node_device_get_parent_args', [
      [ 'name', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_node_device_get_parent_ret', [
      [ 'parent', xdr.lookup('remote_string') ]
    ]);

    xdr.struct('remote_node_device_num_of_caps_args', [
      [ 'name', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_node_device_num_of_caps_ret', [
      [ 'num', xdr.int() ]
    ]);

    xdr.struct('remote_node_device_list_caps_args', [
      [ 'name', xdr.lookup('remote_nonnull_string') ],
      [ 'maxnames', xdr.int() ]
    ]);

    xdr.struct('remote_node_device_list_caps_ret', [
      [ 'names', xdr.varArray(xdr.lookup('remote_nonnull_string'), xdr.lookup('REMOTE_NODE_DEVICE_CAPS_LIST_MAX')) ]
    ]);

    xdr.struct('remote_node_device_dettach_args', [
      [ 'name', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_node_device_detach_flags_args', [
      [ 'name', xdr.lookup('remote_nonnull_string') ],
      [ 'driverName', xdr.lookup('remote_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_node_device_re_attach_args', [
      [ 'name', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_node_device_reset_args', [
      [ 'name', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_node_device_create_xml_args', [
      [ 'xml_desc', xdr.lookup('remote_nonnull_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_node_device_create_xml_ret', [
      [ 'dev', xdr.lookup('remote_nonnull_node_device') ]
    ]);

    xdr.struct('remote_node_device_destroy_args', [
      [ 'name', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_connect_domain_event_register_ret', [
      [ 'cb_registered', xdr.int() ]
    ]);

    xdr.struct('remote_connect_domain_event_deregister_ret', [
      [ 'cb_registered', xdr.int() ]
    ]);

    xdr.struct('remote_domain_event_lifecycle_msg', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'event', xdr.int() ],
      [ 'detail', xdr.int() ]
    ]);

    xdr.struct('remote_domain_event_callback_lifecycle_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'msg', xdr.lookup('remote_domain_event_lifecycle_msg') ]
    ]);

    xdr.struct('remote_connect_domain_xml_from_native_args', [
      [ 'nativeFormat', xdr.lookup('remote_nonnull_string') ],
      [ 'nativeConfig', xdr.lookup('remote_nonnull_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_connect_domain_xml_from_native_ret', [
      [ 'domainXml', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_connect_domain_xml_to_native_args', [
      [ 'nativeFormat', xdr.lookup('remote_nonnull_string') ],
      [ 'domainXml', xdr.lookup('remote_nonnull_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_connect_domain_xml_to_native_ret', [
      [ 'nativeConfig', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_connect_num_of_secrets_ret', [
      [ 'num', xdr.int() ]
    ]);

    xdr.struct('remote_connect_list_secrets_args', [
      [ 'maxuuids', xdr.int() ]
    ]);

    xdr.struct('remote_connect_list_secrets_ret', [
      [ 'uuids', xdr.varArray(xdr.lookup('remote_nonnull_string'), xdr.lookup('REMOTE_SECRET_LIST_MAX')) ]
    ]);

    xdr.struct('remote_secret_lookup_by_uuid_args', [
      [ 'uuid', xdr.lookup('remote_uuid') ]
    ]);

    xdr.struct('remote_secret_lookup_by_uuid_ret', [
      [ 'secret', xdr.lookup('remote_nonnull_secret') ]
    ]);

    xdr.struct('remote_secret_define_xml_args', [
      [ 'xml', xdr.lookup('remote_nonnull_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_secret_define_xml_ret', [
      [ 'secret', xdr.lookup('remote_nonnull_secret') ]
    ]);

    xdr.struct('remote_secret_get_xml_desc_args', [
      [ 'secret', xdr.lookup('remote_nonnull_secret') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_secret_get_xml_desc_ret', [
      [ 'xml', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_secret_set_value_args', [
      [ 'secret', xdr.lookup('remote_nonnull_secret') ],
      [ 'value', xdr.varOpaque(xdr.lookup('REMOTE_SECRET_VALUE_MAX')) ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_secret_get_value_args', [
      [ 'secret', xdr.lookup('remote_nonnull_secret') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_secret_get_value_ret', [
      [ 'value', xdr.varOpaque(xdr.lookup('REMOTE_SECRET_VALUE_MAX')) ]
    ]);

    xdr.struct('remote_secret_undefine_args', [
      [ 'secret', xdr.lookup('remote_nonnull_secret') ]
    ]);

    xdr.struct('remote_secret_lookup_by_usage_args', [
      [ 'usageType', xdr.int() ],
      [ 'usageID', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_secret_lookup_by_usage_ret', [
      [ 'secret', xdr.lookup('remote_nonnull_secret') ]
    ]);

    xdr.struct('remote_domain_migrate_prepare_tunnel_args', [
      [ 'flags', xdr.uhyper() ],
      [ 'dname', xdr.lookup('remote_string') ],
      [ 'resource', xdr.uhyper() ],
      [ 'dom_xml', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_connect_is_secure_ret', [
      [ 'secure', xdr.int() ]
    ]);

    xdr.struct('remote_domain_is_active_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_is_active_ret', [
      [ 'active', xdr.int() ]
    ]);

    xdr.struct('remote_domain_is_persistent_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_is_persistent_ret', [
      [ 'persistent', xdr.int() ]
    ]);

    xdr.struct('remote_domain_is_updated_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_is_updated_ret', [
      [ 'updated', xdr.int() ]
    ]);

    xdr.struct('remote_network_is_active_args', [
      [ 'net', xdr.lookup('remote_nonnull_network') ]
    ]);

    xdr.struct('remote_network_is_active_ret', [
      [ 'active', xdr.int() ]
    ]);

    xdr.struct('remote_network_is_persistent_args', [
      [ 'net', xdr.lookup('remote_nonnull_network') ]
    ]);

    xdr.struct('remote_network_is_persistent_ret', [
      [ 'persistent', xdr.int() ]
    ]);

    xdr.struct('remote_storage_pool_is_active_args', [
      [ 'pool', xdr.lookup('remote_nonnull_storage_pool') ]
    ]);

    xdr.struct('remote_storage_pool_is_active_ret', [
      [ 'active', xdr.int() ]
    ]);

    xdr.struct('remote_storage_pool_is_persistent_args', [
      [ 'pool', xdr.lookup('remote_nonnull_storage_pool') ]
    ]);

    xdr.struct('remote_storage_pool_is_persistent_ret', [
      [ 'persistent', xdr.int() ]
    ]);

    xdr.struct('remote_interface_is_active_args', [
      [ 'iface', xdr.lookup('remote_nonnull_interface') ]
    ]);

    xdr.struct('remote_interface_is_active_ret', [
      [ 'active', xdr.int() ]
    ]);

    xdr.struct('remote_connect_compare_cpu_args', [
      [ 'xml', xdr.lookup('remote_nonnull_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_connect_compare_cpu_ret', [
      [ 'result', xdr.int() ]
    ]);

    xdr.struct('remote_connect_baseline_cpu_args', [
      [ 'xmlCPUs', xdr.varArray(xdr.lookup('remote_nonnull_string'), xdr.lookup('REMOTE_CPU_BASELINE_MAX')) ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_connect_baseline_cpu_ret', [
      [ 'cpu', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_domain_get_job_info_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_get_job_info_ret', [
      [ 'type', xdr.int() ],
      [ 'timeElapsed', xdr.uhyper() ],
      [ 'timeRemaining', xdr.uhyper() ],
      [ 'dataTotal', xdr.uhyper() ],
      [ 'dataProcessed', xdr.uhyper() ],
      [ 'dataRemaining', xdr.uhyper() ],
      [ 'memTotal', xdr.uhyper() ],
      [ 'memProcessed', xdr.uhyper() ],
      [ 'memRemaining', xdr.uhyper() ],
      [ 'fileTotal', xdr.uhyper() ],
      [ 'fileProcessed', xdr.uhyper() ],
      [ 'fileRemaining', xdr.uhyper() ]
    ]);

    xdr.struct('remote_domain_get_job_stats_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_job_stats_ret', [
      [ 'type', xdr.int() ],
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_DOMAIN_JOB_STATS_MAX')) ]
    ]);

    xdr.struct('remote_domain_abort_job_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_migrate_set_max_downtime_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'downtime', xdr.uhyper() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_migrate_get_compression_cache_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_migrate_get_compression_cache_ret', [
      [ 'cacheSize', xdr.uhyper() ]
    ]);

    xdr.struct('remote_domain_migrate_set_compression_cache_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'cacheSize', xdr.uhyper() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_migrate_set_max_speed_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'bandwidth', xdr.uhyper() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_migrate_get_max_speed_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_migrate_get_max_speed_ret', [
      [ 'bandwidth', xdr.uhyper() ]
    ]);

    xdr.struct('remote_connect_domain_event_register_any_args', [
      [ 'eventID', xdr.int() ]
    ]);

    xdr.struct('remote_connect_domain_event_deregister_any_args', [
      [ 'eventID', xdr.int() ]
    ]);

    xdr.struct('remote_connect_domain_event_callback_register_any_args', [
      [ 'eventID', xdr.int() ],
      [ 'dom', xdr.lookup('remote_domain') ]
    ]);

    xdr.struct('remote_connect_domain_event_callback_register_any_ret', [
      [ 'callbackID', xdr.int() ]
    ]);

    xdr.struct('remote_connect_domain_event_callback_deregister_any_args', [
      [ 'callbackID', xdr.int() ]
    ]);

    xdr.struct('remote_domain_event_reboot_msg', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_event_callback_reboot_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'msg', xdr.lookup('remote_domain_event_reboot_msg') ]
    ]);

    xdr.struct('remote_domain_event_rtc_change_msg', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'offset', xdr.hyper() ]
    ]);

    xdr.struct('remote_domain_event_callback_rtc_change_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'msg', xdr.lookup('remote_domain_event_rtc_change_msg') ]
    ]);

    xdr.struct('remote_domain_event_watchdog_msg', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'action', xdr.int() ]
    ]);

    xdr.struct('remote_domain_event_callback_watchdog_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'msg', xdr.lookup('remote_domain_event_watchdog_msg') ]
    ]);

    xdr.struct('remote_domain_event_io_error_msg', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'srcPath', xdr.lookup('remote_nonnull_string') ],
      [ 'devAlias', xdr.lookup('remote_nonnull_string') ],
      [ 'action', xdr.int() ]
    ]);

    xdr.struct('remote_domain_event_callback_io_error_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'msg', xdr.lookup('remote_domain_event_io_error_msg') ]
    ]);

    xdr.struct('remote_domain_event_io_error_reason_msg', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'srcPath', xdr.lookup('remote_nonnull_string') ],
      [ 'devAlias', xdr.lookup('remote_nonnull_string') ],
      [ 'action', xdr.int() ],
      [ 'reason', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_domain_event_callback_io_error_reason_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'msg', xdr.lookup('remote_domain_event_io_error_reason_msg') ]
    ]);

    xdr.struct('remote_domain_event_graphics_address', [
      [ 'family', xdr.int() ],
      [ 'node', xdr.lookup('remote_nonnull_string') ],
      [ 'service', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_domain_event_graphics_identity', [
      [ 'type', xdr.lookup('remote_nonnull_string') ],
      [ 'name', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_domain_event_graphics_msg', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'phase', xdr.int() ],
      [ 'local', xdr.lookup('remote_domain_event_graphics_address') ],
      [ 'remote', xdr.lookup('remote_domain_event_graphics_address') ],
      [ 'authScheme', xdr.lookup('remote_nonnull_string') ],
      [ 'subject', xdr.varArray(xdr.lookup('remote_domain_event_graphics_identity'), xdr.lookup('REMOTE_DOMAIN_EVENT_GRAPHICS_IDENTITY_MAX')) ]
    ]);

    xdr.struct('remote_domain_event_callback_graphics_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'msg', xdr.lookup('remote_domain_event_graphics_msg') ]
    ]);

    xdr.struct('remote_domain_event_block_job_msg', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'path', xdr.lookup('remote_nonnull_string') ],
      [ 'type', xdr.int() ],
      [ 'status', xdr.int() ]
    ]);

    xdr.struct('remote_domain_event_callback_block_job_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'msg', xdr.lookup('remote_domain_event_block_job_msg') ]
    ]);

    xdr.struct('remote_domain_event_disk_change_msg', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'oldSrcPath', xdr.lookup('remote_string') ],
      [ 'newSrcPath', xdr.lookup('remote_string') ],
      [ 'devAlias', xdr.lookup('remote_nonnull_string') ],
      [ 'reason', xdr.int() ]
    ]);

    xdr.struct('remote_domain_event_callback_disk_change_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'msg', xdr.lookup('remote_domain_event_disk_change_msg') ]
    ]);

    xdr.struct('remote_domain_event_tray_change_msg', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'devAlias', xdr.lookup('remote_nonnull_string') ],
      [ 'reason', xdr.int() ]
    ]);

    xdr.struct('remote_domain_event_callback_tray_change_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'msg', xdr.lookup('remote_domain_event_tray_change_msg') ]
    ]);

    xdr.struct('remote_domain_event_pmwakeup_msg', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_event_callback_pmwakeup_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'reason', xdr.int() ],
      [ 'msg', xdr.lookup('remote_domain_event_pmwakeup_msg') ]
    ]);

    xdr.struct('remote_domain_event_pmsuspend_msg', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_event_callback_pmsuspend_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'reason', xdr.int() ],
      [ 'msg', xdr.lookup('remote_domain_event_pmsuspend_msg') ]
    ]);

    xdr.struct('remote_domain_event_balloon_change_msg', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'actual', xdr.uhyper() ]
    ]);

    xdr.struct('remote_domain_event_callback_balloon_change_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'msg', xdr.lookup('remote_domain_event_balloon_change_msg') ]
    ]);

    xdr.struct('remote_domain_event_pmsuspend_disk_msg', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_event_callback_pmsuspend_disk_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'reason', xdr.int() ],
      [ 'msg', xdr.lookup('remote_domain_event_pmsuspend_disk_msg') ]
    ]);

    xdr.struct('remote_domain_managed_save_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_has_managed_save_image_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_has_managed_save_image_ret', [
      [ 'result', xdr.int() ]
    ]);

    xdr.struct('remote_domain_managed_save_remove_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_snapshot_create_xml_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'xml_desc', xdr.lookup('remote_nonnull_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_snapshot_create_xml_ret', [
      [ 'snap', xdr.lookup('remote_nonnull_domain_snapshot') ]
    ]);

    xdr.struct('remote_domain_snapshot_get_xml_desc_args', [
      [ 'snap', xdr.lookup('remote_nonnull_domain_snapshot') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_snapshot_get_xml_desc_ret', [
      [ 'xml', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_domain_snapshot_num_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_snapshot_num_ret', [
      [ 'num', xdr.int() ]
    ]);

    xdr.struct('remote_domain_snapshot_list_names_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'maxnames', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_snapshot_list_names_ret', [
      [ 'names', xdr.varArray(xdr.lookup('remote_nonnull_string'), xdr.lookup('REMOTE_DOMAIN_SNAPSHOT_LIST_MAX')) ]
    ]);

    xdr.struct('remote_domain_list_all_snapshots_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'need_results', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_list_all_snapshots_ret', [
      [ 'snapshots', xdr.varArray(xdr.lookup('remote_nonnull_domain_snapshot'), xdr.lookup('REMOTE_DOMAIN_SNAPSHOT_LIST_MAX')) ],
      [ 'ret', xdr.int() ]
    ]);

    xdr.struct('remote_domain_snapshot_num_children_args', [
      [ 'snap', xdr.lookup('remote_nonnull_domain_snapshot') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_snapshot_num_children_ret', [
      [ 'num', xdr.int() ]
    ]);

    xdr.struct('remote_domain_snapshot_list_children_names_args', [
      [ 'snap', xdr.lookup('remote_nonnull_domain_snapshot') ],
      [ 'maxnames', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_snapshot_list_children_names_ret', [
      [ 'names', xdr.varArray(xdr.lookup('remote_nonnull_string'), xdr.lookup('REMOTE_DOMAIN_SNAPSHOT_LIST_MAX')) ]
    ]);

    xdr.struct('remote_domain_snapshot_list_all_children_args', [
      [ 'snapshot', xdr.lookup('remote_nonnull_domain_snapshot') ],
      [ 'need_results', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_snapshot_list_all_children_ret', [
      [ 'snapshots', xdr.varArray(xdr.lookup('remote_nonnull_domain_snapshot'), xdr.lookup('REMOTE_DOMAIN_SNAPSHOT_LIST_MAX')) ],
      [ 'ret', xdr.int() ]
    ]);

    xdr.struct('remote_domain_snapshot_lookup_by_name_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'name', xdr.lookup('remote_nonnull_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_snapshot_lookup_by_name_ret', [
      [ 'snap', xdr.lookup('remote_nonnull_domain_snapshot') ]
    ]);

    xdr.struct('remote_domain_has_current_snapshot_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_has_current_snapshot_ret', [
      [ 'result', xdr.int() ]
    ]);

    xdr.struct('remote_domain_snapshot_get_parent_args', [
      [ 'snap', xdr.lookup('remote_nonnull_domain_snapshot') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_snapshot_get_parent_ret', [
      [ 'snap', xdr.lookup('remote_nonnull_domain_snapshot') ]
    ]);

    xdr.struct('remote_domain_snapshot_current_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_snapshot_current_ret', [
      [ 'snap', xdr.lookup('remote_nonnull_domain_snapshot') ]
    ]);

    xdr.struct('remote_domain_snapshot_is_current_args', [
      [ 'snap', xdr.lookup('remote_nonnull_domain_snapshot') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_snapshot_is_current_ret', [
      [ 'current', xdr.int() ]
    ]);

    xdr.struct('remote_domain_snapshot_has_metadata_args', [
      [ 'snap', xdr.lookup('remote_nonnull_domain_snapshot') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_snapshot_has_metadata_ret', [
      [ 'metadata', xdr.int() ]
    ]);

    xdr.struct('remote_domain_revert_to_snapshot_args', [
      [ 'snap', xdr.lookup('remote_nonnull_domain_snapshot') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_snapshot_delete_args', [
      [ 'snap', xdr.lookup('remote_nonnull_domain_snapshot') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_open_console_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'dev_name', xdr.lookup('remote_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_open_channel_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'name', xdr.lookup('remote_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_storage_vol_upload_args', [
      [ 'vol', xdr.lookup('remote_nonnull_storage_vol') ],
      [ 'offset', xdr.uhyper() ],
      [ 'length', xdr.uhyper() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_storage_vol_download_args', [
      [ 'vol', xdr.lookup('remote_nonnull_storage_vol') ],
      [ 'offset', xdr.uhyper() ],
      [ 'length', xdr.uhyper() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_state_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_state_ret', [
      [ 'state', xdr.int() ],
      [ 'reason', xdr.int() ]
    ]);

    xdr.struct('remote_domain_migrate_begin3_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'xmlin', xdr.lookup('remote_string') ],
      [ 'flags', xdr.uhyper() ],
      [ 'dname', xdr.lookup('remote_string') ],
      [ 'resource', xdr.uhyper() ]
    ]);

    xdr.struct('remote_domain_migrate_begin3_ret', [
      [ 'cookie_out', xdr.varOpaque(xdr.lookup('REMOTE_MIGRATE_COOKIE_MAX')) ],
      [ 'xml', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_domain_migrate_prepare3_args', [
      [ 'cookie_in', xdr.varOpaque(xdr.lookup('REMOTE_MIGRATE_COOKIE_MAX')) ],
      [ 'uri_in', xdr.lookup('remote_string') ],
      [ 'flags', xdr.uhyper() ],
      [ 'dname', xdr.lookup('remote_string') ],
      [ 'resource', xdr.uhyper() ],
      [ 'dom_xml', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_domain_migrate_prepare3_ret', [
      [ 'cookie_out', xdr.varOpaque(xdr.lookup('REMOTE_MIGRATE_COOKIE_MAX')) ],
      [ 'uri_out', xdr.lookup('remote_string') ]
    ]);

    xdr.struct('remote_domain_migrate_prepare_tunnel3_args', [
      [ 'cookie_in', xdr.varOpaque(xdr.lookup('REMOTE_MIGRATE_COOKIE_MAX')) ],
      [ 'flags', xdr.uhyper() ],
      [ 'dname', xdr.lookup('remote_string') ],
      [ 'resource', xdr.uhyper() ],
      [ 'dom_xml', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_domain_migrate_prepare_tunnel3_ret', [
      [ 'cookie_out', xdr.varOpaque(xdr.lookup('REMOTE_MIGRATE_COOKIE_MAX')) ]
    ]);

    xdr.struct('remote_domain_migrate_perform3_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'xmlin', xdr.lookup('remote_string') ],
      [ 'cookie_in', xdr.varOpaque(xdr.lookup('REMOTE_MIGRATE_COOKIE_MAX')) ],
      [ 'dconnuri', xdr.lookup('remote_string') ],
      [ 'uri', xdr.lookup('remote_string') ],
      [ 'flags', xdr.uhyper() ],
      [ 'dname', xdr.lookup('remote_string') ],
      [ 'resource', xdr.uhyper() ]
    ]);

    xdr.struct('remote_domain_migrate_perform3_ret', [
      [ 'cookie_out', xdr.varOpaque(xdr.lookup('REMOTE_MIGRATE_COOKIE_MAX')) ]
    ]);

    xdr.struct('remote_domain_migrate_finish3_args', [
      [ 'dname', xdr.lookup('remote_nonnull_string') ],
      [ 'cookie_in', xdr.varOpaque(xdr.lookup('REMOTE_MIGRATE_COOKIE_MAX')) ],
      [ 'dconnuri', xdr.lookup('remote_string') ],
      [ 'uri', xdr.lookup('remote_string') ],
      [ 'flags', xdr.uhyper() ],
      [ 'cancelled', xdr.int() ]
    ]);

    xdr.struct('remote_domain_migrate_finish3_ret', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'cookie_out', xdr.varOpaque(xdr.lookup('REMOTE_MIGRATE_COOKIE_MAX')) ]
    ]);

    xdr.struct('remote_domain_migrate_confirm3_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'cookie_in', xdr.varOpaque(xdr.lookup('REMOTE_MIGRATE_COOKIE_MAX')) ],
      [ 'flags', xdr.uhyper() ],
      [ 'cancelled', xdr.int() ]
    ]);

    xdr.struct('remote_domain_event_control_error_msg', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ]
    ]);

    xdr.struct('remote_domain_event_callback_control_error_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'msg', xdr.lookup('remote_domain_event_control_error_msg') ]
    ]);

    xdr.struct('remote_domain_get_control_info_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_control_info_ret', [
      [ 'state', xdr.uint() ],
      [ 'details', xdr.uint() ],
      [ 'stateTime', xdr.uhyper() ]
    ]);

    xdr.struct('remote_domain_open_graphics_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'idx', xdr.uint() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_open_graphics_fd_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'idx', xdr.uint() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_node_suspend_for_duration_args', [
      [ 'target', xdr.uint() ],
      [ 'duration', xdr.uhyper() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_shutdown_flags_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_disk_errors_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'maxerrors', xdr.uint() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_disk_errors_ret', [
      [ 'errors', xdr.varArray(xdr.lookup('remote_domain_disk_error'), xdr.lookup('REMOTE_DOMAIN_DISK_ERRORS_MAX')) ],
      [ 'nerrors', xdr.int() ]
    ]);

    xdr.struct('remote_connect_list_all_domains_args', [
      [ 'need_results', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_connect_list_all_domains_ret', [
      [ 'domains', xdr.varArray(xdr.lookup('remote_nonnull_domain'), xdr.lookup('REMOTE_DOMAIN_LIST_MAX')) ],
      [ 'ret', xdr.uint() ]
    ]);

    xdr.struct('remote_connect_list_all_storage_pools_args', [
      [ 'need_results', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_connect_list_all_storage_pools_ret', [
      [ 'pools', xdr.varArray(xdr.lookup('remote_nonnull_storage_pool'), xdr.lookup('REMOTE_STORAGE_POOL_LIST_MAX')) ],
      [ 'ret', xdr.uint() ]
    ]);

    xdr.struct('remote_storage_pool_list_all_volumes_args', [
      [ 'pool', xdr.lookup('remote_nonnull_storage_pool') ],
      [ 'need_results', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_storage_pool_list_all_volumes_ret', [
      [ 'vols', xdr.varArray(xdr.lookup('remote_nonnull_storage_vol'), xdr.lookup('REMOTE_STORAGE_VOL_LIST_MAX')) ],
      [ 'ret', xdr.uint() ]
    ]);

    xdr.struct('remote_connect_list_all_networks_args', [
      [ 'need_results', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_connect_list_all_networks_ret', [
      [ 'nets', xdr.varArray(xdr.lookup('remote_nonnull_network'), xdr.lookup('REMOTE_NETWORK_LIST_MAX')) ],
      [ 'ret', xdr.uint() ]
    ]);

    xdr.struct('remote_connect_list_all_interfaces_args', [
      [ 'need_results', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_connect_list_all_interfaces_ret', [
      [ 'ifaces', xdr.varArray(xdr.lookup('remote_nonnull_interface'), xdr.lookup('REMOTE_INTERFACE_LIST_MAX')) ],
      [ 'ret', xdr.uint() ]
    ]);

    xdr.struct('remote_connect_list_all_node_devices_args', [
      [ 'need_results', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_connect_list_all_node_devices_ret', [
      [ 'devices', xdr.varArray(xdr.lookup('remote_nonnull_node_device'), xdr.lookup('REMOTE_NODE_DEVICE_LIST_MAX')) ],
      [ 'ret', xdr.uint() ]
    ]);

    xdr.struct('remote_connect_list_all_nwfilters_args', [
      [ 'need_results', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_connect_list_all_nwfilters_ret', [
      [ 'filters', xdr.varArray(xdr.lookup('remote_nonnull_nwfilter'), xdr.lookup('REMOTE_NWFILTER_LIST_MAX')) ],
      [ 'ret', xdr.uint() ]
    ]);

    xdr.struct('remote_connect_list_all_secrets_args', [
      [ 'need_results', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_connect_list_all_secrets_ret', [
      [ 'secrets', xdr.varArray(xdr.lookup('remote_nonnull_secret'), xdr.lookup('REMOTE_SECRET_LIST_MAX')) ],
      [ 'ret', xdr.uint() ]
    ]);

    xdr.struct('remote_node_set_memory_parameters_args', [
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_NODE_MEMORY_PARAMETERS_MAX')) ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_node_get_memory_parameters_args', [
      [ 'nparams', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_node_get_memory_parameters_ret', [
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_NODE_MEMORY_PARAMETERS_MAX')) ],
      [ 'nparams', xdr.int() ]
    ]);

    xdr.struct('remote_node_get_cpu_map_args', [
      [ 'need_map', xdr.int() ],
      [ 'need_online', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_node_get_cpu_map_ret', [
      [ 'cpumap', xdr.varOpaque(xdr.lookup('REMOTE_CPUMAP_MAX')) ],
      [ 'online', xdr.uint() ],
      [ 'ret', xdr.int() ]
    ]);

    xdr.struct('remote_domain_fstrim_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'mountPoint', xdr.lookup('remote_string') ],
      [ 'minimum', xdr.uhyper() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_time_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_time_ret', [
      [ 'seconds', xdr.hyper() ],
      [ 'nseconds', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_set_time_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'seconds', xdr.hyper() ],
      [ 'nseconds', xdr.uint() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_migrate_begin3_params_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_DOMAIN_MIGRATE_PARAM_LIST_MAX')) ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_migrate_begin3_params_ret', [
      [ 'cookie_out', xdr.varOpaque(xdr.lookup('REMOTE_MIGRATE_COOKIE_MAX')) ],
      [ 'xml', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_domain_migrate_prepare3_params_args', [
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_DOMAIN_MIGRATE_PARAM_LIST_MAX')) ],
      [ 'cookie_in', xdr.varOpaque(xdr.lookup('REMOTE_MIGRATE_COOKIE_MAX')) ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_migrate_prepare3_params_ret', [
      [ 'cookie_out', xdr.varOpaque(xdr.lookup('REMOTE_MIGRATE_COOKIE_MAX')) ],
      [ 'uri_out', xdr.lookup('remote_string') ]
    ]);

    xdr.struct('remote_domain_migrate_prepare_tunnel3_params_args', [
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_DOMAIN_MIGRATE_PARAM_LIST_MAX')) ],
      [ 'cookie_in', xdr.varOpaque(xdr.lookup('REMOTE_MIGRATE_COOKIE_MAX')) ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_migrate_prepare_tunnel3_params_ret', [
      [ 'cookie_out', xdr.varOpaque(xdr.lookup('REMOTE_MIGRATE_COOKIE_MAX')) ]
    ]);

    xdr.struct('remote_domain_migrate_perform3_params_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'dconnuri', xdr.lookup('remote_string') ],
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_DOMAIN_MIGRATE_PARAM_LIST_MAX')) ],
      [ 'cookie_in', xdr.varOpaque(xdr.lookup('REMOTE_MIGRATE_COOKIE_MAX')) ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_migrate_perform3_params_ret', [
      [ 'cookie_out', xdr.varOpaque(xdr.lookup('REMOTE_MIGRATE_COOKIE_MAX')) ]
    ]);

    xdr.struct('remote_domain_migrate_finish3_params_args', [
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_DOMAIN_MIGRATE_PARAM_LIST_MAX')) ],
      [ 'cookie_in', xdr.varOpaque(xdr.lookup('REMOTE_MIGRATE_COOKIE_MAX')) ],
      [ 'flags', xdr.uint() ],
      [ 'cancelled', xdr.int() ]
    ]);

    xdr.struct('remote_domain_migrate_finish3_params_ret', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'cookie_out', xdr.varOpaque(xdr.lookup('REMOTE_MIGRATE_COOKIE_MAX')) ]
    ]);

    xdr.struct('remote_domain_migrate_confirm3_params_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_DOMAIN_MIGRATE_PARAM_LIST_MAX')) ],
      [ 'cookie_in', xdr.varOpaque(xdr.lookup('REMOTE_MIGRATE_COOKIE_MAX')) ],
      [ 'flags', xdr.uint() ],
      [ 'cancelled', xdr.int() ]
    ]);

    xdr.struct('remote_domain_event_device_removed_msg', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'devAlias', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_domain_event_callback_device_removed_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'msg', xdr.lookup('remote_domain_event_device_removed_msg') ]
    ]);

    xdr.struct('remote_domain_event_block_job_2_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'dst', xdr.lookup('remote_nonnull_string') ],
      [ 'type', xdr.int() ],
      [ 'status', xdr.int() ]
    ]);

    xdr.struct('remote_domain_event_callback_tunable_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_DOMAIN_EVENT_TUNABLE_MAX')) ]
    ]);

    xdr.struct('remote_domain_event_callback_device_added_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'devAlias', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_connect_event_connection_closed_msg', [
      [ 'reason', xdr.int() ]
    ]);

    xdr.struct('remote_connect_get_cpu_model_names_args', [
      [ 'arch', xdr.lookup('remote_nonnull_string') ],
      [ 'need_results', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_connect_get_cpu_model_names_ret', [
      [ 'models', xdr.varArray(xdr.lookup('remote_nonnull_string'), xdr.lookup('REMOTE_CONNECT_CPU_MODELS_MAX')) ],
      [ 'ret', xdr.int() ]
    ]);

    xdr.struct('remote_connect_network_event_register_any_args', [
      [ 'eventID', xdr.int() ],
      [ 'net', xdr.lookup('remote_network') ]
    ]);

    xdr.struct('remote_connect_network_event_register_any_ret', [
      [ 'callbackID', xdr.int() ]
    ]);

    xdr.struct('remote_connect_network_event_deregister_any_args', [
      [ 'callbackID', xdr.int() ]
    ]);

    xdr.struct('remote_network_event_lifecycle_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'net', xdr.lookup('remote_nonnull_network') ],
      [ 'event', xdr.int() ],
      [ 'detail', xdr.int() ]
    ]);

    xdr.struct('remote_connect_storage_pool_event_register_any_args', [
      [ 'eventID', xdr.int() ],
      [ 'pool', xdr.lookup('remote_storage_pool') ]
    ]);

    xdr.struct('remote_connect_storage_pool_event_register_any_ret', [
      [ 'callbackID', xdr.int() ]
    ]);

    xdr.struct('remote_connect_storage_pool_event_deregister_any_args', [
      [ 'callbackID', xdr.int() ]
    ]);

    xdr.struct('remote_storage_pool_event_lifecycle_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'pool', xdr.lookup('remote_nonnull_storage_pool') ],
      [ 'event', xdr.int() ],
      [ 'detail', xdr.int() ]
    ]);

    xdr.struct('remote_storage_pool_event_refresh_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'pool', xdr.lookup('remote_nonnull_storage_pool') ]
    ]);

    xdr.struct('remote_connect_node_device_event_register_any_args', [
      [ 'eventID', xdr.int() ],
      [ 'dev', xdr.lookup('remote_node_device') ]
    ]);

    xdr.struct('remote_connect_node_device_event_register_any_ret', [
      [ 'callbackID', xdr.int() ]
    ]);

    xdr.struct('remote_connect_node_device_event_deregister_any_args', [
      [ 'callbackID', xdr.int() ]
    ]);

    xdr.struct('remote_node_device_event_lifecycle_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'dev', xdr.lookup('remote_nonnull_node_device') ],
      [ 'event', xdr.int() ],
      [ 'detail', xdr.int() ]
    ]);

    xdr.struct('remote_node_device_event_update_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'dev', xdr.lookup('remote_nonnull_node_device') ]
    ]);

    xdr.struct('remote_domain_fsfreeze_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'mountpoints', xdr.varArray(xdr.lookup('remote_nonnull_string'), xdr.lookup('REMOTE_DOMAIN_FSFREEZE_MOUNTPOINTS_MAX')) ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_fsfreeze_ret', [
      [ 'filesystems', xdr.int() ]
    ]);

    xdr.struct('remote_domain_fsthaw_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'mountpoints', xdr.varArray(xdr.lookup('remote_nonnull_string'), xdr.lookup('REMOTE_DOMAIN_FSFREEZE_MOUNTPOINTS_MAX')) ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_fsthaw_ret', [
      [ 'filesystems', xdr.int() ]
    ]);

    xdr.struct('remote_node_get_free_pages_args', [
      [ 'pages', xdr.varArray(xdr.uint(), xdr.lookup('REMOTE_NODE_MAX_CELLS')) ],
      [ 'startCell', xdr.int() ],
      [ 'cellCount', xdr.uint() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_node_get_free_pages_ret', [
      [ 'counts', xdr.varArray(xdr.uhyper(), xdr.lookup('REMOTE_NODE_MAX_CELLS')) ]
    ]);

    xdr.struct('remote_node_alloc_pages_args', [
      [ 'pageSizes', xdr.varArray(xdr.uint(), xdr.lookup('REMOTE_NODE_MAX_CELLS')) ],
      [ 'pageCounts', xdr.varArray(xdr.uhyper(), xdr.lookup('REMOTE_NODE_MAX_CELLS')) ],
      [ 'startCell', xdr.int() ],
      [ 'cellCount', xdr.uint() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_node_alloc_pages_ret', [
      [ 'ret', xdr.int() ]
    ]);

    xdr.struct('remote_network_dhcp_lease', [
      [ 'iface', xdr.lookup('remote_nonnull_string') ],
      [ 'expirytime', xdr.hyper() ],
      [ 'type', xdr.int() ],
      [ 'mac', xdr.lookup('remote_string') ],
      [ 'iaid', xdr.lookup('remote_string') ],
      [ 'ipaddr', xdr.lookup('remote_nonnull_string') ],
      [ 'prefix', xdr.uint() ],
      [ 'hostname', xdr.lookup('remote_string') ],
      [ 'clientid', xdr.lookup('remote_string') ]
    ]);

    xdr.struct('remote_network_get_dhcp_leases_args', [
      [ 'net', xdr.lookup('remote_nonnull_network') ],
      [ 'mac', xdr.lookup('remote_string') ],
      [ 'need_results', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_network_get_dhcp_leases_ret', [
      [ 'leases', xdr.varArray(xdr.lookup('remote_network_dhcp_lease'), xdr.lookup('REMOTE_NETWORK_DHCP_LEASES_MAX')) ],
      [ 'ret', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_stats_record', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_CONNECT_GET_ALL_DOMAIN_STATS_MAX')) ]
    ]);

    xdr.struct('remote_connect_get_all_domain_stats_args', [
      [ 'doms', xdr.varArray(xdr.lookup('remote_nonnull_domain'), xdr.lookup('REMOTE_DOMAIN_LIST_MAX')) ],
      [ 'stats', xdr.uint() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_event_callback_agent_lifecycle_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'state', xdr.int() ],
      [ 'reason', xdr.int() ]
    ]);

    xdr.struct('remote_connect_get_all_domain_stats_ret', [
      [ 'retStats', xdr.varArray(xdr.lookup('remote_domain_stats_record'), xdr.lookup('REMOTE_DOMAIN_LIST_MAX')) ]
    ]);

    xdr.struct('remote_domain_fsinfo', [
      [ 'mountpoint', xdr.lookup('remote_nonnull_string') ],
      [ 'name', xdr.lookup('remote_nonnull_string') ],
      [ 'fstype', xdr.lookup('remote_nonnull_string') ],
      [ 'dev_aliases', xdr.varArray(xdr.lookup('remote_nonnull_string'), xdr.lookup('REMOTE_DOMAIN_FSINFO_DISKS_MAX')) ]
    ]);

    xdr.struct('remote_domain_get_fsinfo_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_fsinfo_ret', [
      [ 'info', xdr.varArray(xdr.lookup('remote_domain_fsinfo'), xdr.lookup('REMOTE_DOMAIN_FSINFO_MAX')) ],
      [ 'ret', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_ip_addr', [
      [ 'type', xdr.int() ],
      [ 'addr', xdr.lookup('remote_nonnull_string') ],
      [ 'prefix', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_interface', [
      [ 'name', xdr.lookup('remote_nonnull_string') ],
      [ 'hwaddr', xdr.lookup('remote_string') ],
      [ 'addrs', xdr.varArray(xdr.lookup('remote_domain_ip_addr'), xdr.lookup('REMOTE_DOMAIN_IP_ADDR_MAX')) ]
    ]);

    xdr.struct('remote_domain_interface_addresses_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'source', xdr.uint() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_interface_addresses_ret', [
      [ 'ifaces', xdr.varArray(xdr.lookup('remote_domain_interface'), xdr.lookup('REMOTE_DOMAIN_INTERFACE_MAX')) ]
    ]);

    xdr.struct('remote_domain_set_user_password_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'user', xdr.lookup('remote_string') ],
      [ 'password', xdr.lookup('remote_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_rename_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'new_name', xdr.lookup('remote_string') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_rename_ret', [
      [ 'retcode', xdr.int() ]
    ]);

    xdr.struct('remote_domain_event_callback_migration_iteration_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'iteration', xdr.int() ]
    ]);

    xdr.struct('remote_domain_event_callback_job_completed_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_DOMAIN_JOB_STATS_MAX')) ]
    ]);

    xdr.struct('remote_domain_migrate_start_post_copy_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_event_callback_device_removal_failed_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'devAlias', xdr.lookup('remote_nonnull_string') ]
    ]);

    xdr.struct('remote_domain_get_guest_vcpus_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_get_guest_vcpus_ret', [
      [ 'params', xdr.varArray(xdr.lookup('remote_typed_param'), xdr.lookup('REMOTE_DOMAIN_GUEST_VCPU_PARAMS_MAX')) ]
    ]);

    xdr.struct('remote_domain_set_guest_vcpus_args', [
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'cpumap', xdr.lookup('remote_nonnull_string') ],
      [ 'state', xdr.int() ],
      [ 'flags', xdr.uint() ]
    ]);

    xdr.struct('remote_domain_event_callback_metadata_change_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'dom', xdr.lookup('remote_nonnull_domain') ],
      [ 'type', xdr.int() ],
      [ 'nsuri', xdr.lookup('remote_string') ]
    ]);

    xdr.struct('remote_connect_secret_event_register_any_args', [
      [ 'eventID', xdr.int() ],
      [ 'secret', xdr.lookup('remote_secret') ]
    ]);

    xdr.struct('remote_connect_secret_event_register_any_ret', [
      [ 'callbackID', xdr.int() ]
    ]);

    xdr.struct('remote_connect_secret_event_deregister_any_args', [
      [ 'callbackID', xdr.int() ]
    ]);

    xdr.struct('remote_secret_event_lifecycle_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'secret', xdr.lookup('remote_nonnull_secret') ],
      [ 'event', xdr.int() ],
      [ 'detail', xdr.int() ]
    ]);

    xdr.struct('remote_secret_event_value_changed_msg', [
      [ 'callbackID', xdr.int() ],
      [ 'secret', xdr.lookup('remote_nonnull_secret') ]
    ]);

    xdr.enum('remote_auth_type', {
      REMOTE_AUTH_NONE: 0,
      REMOTE_AUTH_SASL: 1,
      REMOTE_AUTH_POLKIT: 2
    });

    xdr.enum('remote_procedure', {
      REMOTE_PROC_CONNECT_OPEN: 1,
      REMOTE_PROC_CONNECT_CLOSE: 2,
      REMOTE_PROC_CONNECT_GET_TYPE: 3,
      REMOTE_PROC_CONNECT_GET_VERSION: 4,
      REMOTE_PROC_CONNECT_GET_MAX_VCPUS: 5,
      REMOTE_PROC_NODE_GET_INFO: 6,
      REMOTE_PROC_CONNECT_GET_CAPABILITIES: 7,
      REMOTE_PROC_DOMAIN_ATTACH_DEVICE: 8,
      REMOTE_PROC_DOMAIN_CREATE: 9,
      REMOTE_PROC_DOMAIN_CREATE_XML: 10,
      REMOTE_PROC_DOMAIN_DEFINE_XML: 11,
      REMOTE_PROC_DOMAIN_DESTROY: 12,
      REMOTE_PROC_DOMAIN_DETACH_DEVICE: 13,
      REMOTE_PROC_DOMAIN_GET_XML_DESC: 14,
      REMOTE_PROC_DOMAIN_GET_AUTOSTART: 15,
      REMOTE_PROC_DOMAIN_GET_INFO: 16,
      REMOTE_PROC_DOMAIN_GET_MAX_MEMORY: 17,
      REMOTE_PROC_DOMAIN_GET_MAX_VCPUS: 18,
      REMOTE_PROC_DOMAIN_GET_OS_TYPE: 19,
      REMOTE_PROC_DOMAIN_GET_VCPUS: 20,
      REMOTE_PROC_CONNECT_LIST_DEFINED_DOMAINS: 21,
      REMOTE_PROC_DOMAIN_LOOKUP_BY_ID: 22,
      REMOTE_PROC_DOMAIN_LOOKUP_BY_NAME: 23,
      REMOTE_PROC_DOMAIN_LOOKUP_BY_UUID: 24,
      REMOTE_PROC_CONNECT_NUM_OF_DEFINED_DOMAINS: 25,
      REMOTE_PROC_DOMAIN_PIN_VCPU: 26,
      REMOTE_PROC_DOMAIN_REBOOT: 27,
      REMOTE_PROC_DOMAIN_RESUME: 28,
      REMOTE_PROC_DOMAIN_SET_AUTOSTART: 29,
      REMOTE_PROC_DOMAIN_SET_MAX_MEMORY: 30,
      REMOTE_PROC_DOMAIN_SET_MEMORY: 31,
      REMOTE_PROC_DOMAIN_SET_VCPUS: 32,
      REMOTE_PROC_DOMAIN_SHUTDOWN: 33,
      REMOTE_PROC_DOMAIN_SUSPEND: 34,
      REMOTE_PROC_DOMAIN_UNDEFINE: 35,
      REMOTE_PROC_CONNECT_LIST_DEFINED_NETWORKS: 36,
      REMOTE_PROC_CONNECT_LIST_DOMAINS: 37,
      REMOTE_PROC_CONNECT_LIST_NETWORKS: 38,
      REMOTE_PROC_NETWORK_CREATE: 39,
      REMOTE_PROC_NETWORK_CREATE_XML: 40,
      REMOTE_PROC_NETWORK_DEFINE_XML: 41,
      REMOTE_PROC_NETWORK_DESTROY: 42,
      REMOTE_PROC_NETWORK_GET_XML_DESC: 43,
      REMOTE_PROC_NETWORK_GET_AUTOSTART: 44,
      REMOTE_PROC_NETWORK_GET_BRIDGE_NAME: 45,
      REMOTE_PROC_NETWORK_LOOKUP_BY_NAME: 46,
      REMOTE_PROC_NETWORK_LOOKUP_BY_UUID: 47,
      REMOTE_PROC_NETWORK_SET_AUTOSTART: 48,
      REMOTE_PROC_NETWORK_UNDEFINE: 49,
      REMOTE_PROC_CONNECT_NUM_OF_DEFINED_NETWORKS: 50,
      REMOTE_PROC_CONNECT_NUM_OF_DOMAINS: 51,
      REMOTE_PROC_CONNECT_NUM_OF_NETWORKS: 52,
      REMOTE_PROC_DOMAIN_CORE_DUMP: 53,
      REMOTE_PROC_DOMAIN_RESTORE: 54,
      REMOTE_PROC_DOMAIN_SAVE: 55,
      REMOTE_PROC_DOMAIN_GET_SCHEDULER_TYPE: 56,
      REMOTE_PROC_DOMAIN_GET_SCHEDULER_PARAMETERS: 57,
      REMOTE_PROC_DOMAIN_SET_SCHEDULER_PARAMETERS: 58,
      REMOTE_PROC_CONNECT_GET_HOSTNAME: 59,
      REMOTE_PROC_CONNECT_SUPPORTS_FEATURE: 60,
      REMOTE_PROC_DOMAIN_MIGRATE_PREPARE: 61,
      REMOTE_PROC_DOMAIN_MIGRATE_PERFORM: 62,
      REMOTE_PROC_DOMAIN_MIGRATE_FINISH: 63,
      REMOTE_PROC_DOMAIN_BLOCK_STATS: 64,
      REMOTE_PROC_DOMAIN_INTERFACE_STATS: 65,
      REMOTE_PROC_AUTH_LIST: 66,
      REMOTE_PROC_AUTH_SASL_INIT: 67,
      REMOTE_PROC_AUTH_SASL_START: 68,
      REMOTE_PROC_AUTH_SASL_STEP: 69,
      REMOTE_PROC_AUTH_POLKIT: 70,
      REMOTE_PROC_CONNECT_NUM_OF_STORAGE_POOLS: 71,
      REMOTE_PROC_CONNECT_LIST_STORAGE_POOLS: 72,
      REMOTE_PROC_CONNECT_NUM_OF_DEFINED_STORAGE_POOLS: 73,
      REMOTE_PROC_CONNECT_LIST_DEFINED_STORAGE_POOLS: 74,
      REMOTE_PROC_CONNECT_FIND_STORAGE_POOL_SOURCES: 75,
      REMOTE_PROC_STORAGE_POOL_CREATE_XML: 76,
      REMOTE_PROC_STORAGE_POOL_DEFINE_XML: 77,
      REMOTE_PROC_STORAGE_POOL_CREATE: 78,
      REMOTE_PROC_STORAGE_POOL_BUILD: 79,
      REMOTE_PROC_STORAGE_POOL_DESTROY: 80,
      REMOTE_PROC_STORAGE_POOL_DELETE: 81,
      REMOTE_PROC_STORAGE_POOL_UNDEFINE: 82,
      REMOTE_PROC_STORAGE_POOL_REFRESH: 83,
      REMOTE_PROC_STORAGE_POOL_LOOKUP_BY_NAME: 84,
      REMOTE_PROC_STORAGE_POOL_LOOKUP_BY_UUID: 85,
      REMOTE_PROC_STORAGE_POOL_LOOKUP_BY_VOLUME: 86,
      REMOTE_PROC_STORAGE_POOL_GET_INFO: 87,
      REMOTE_PROC_STORAGE_POOL_GET_XML_DESC: 88,
      REMOTE_PROC_STORAGE_POOL_GET_AUTOSTART: 89,
      REMOTE_PROC_STORAGE_POOL_SET_AUTOSTART: 90,
      REMOTE_PROC_STORAGE_POOL_NUM_OF_VOLUMES: 91,
      REMOTE_PROC_STORAGE_POOL_LIST_VOLUMES: 92,
      REMOTE_PROC_STORAGE_VOL_CREATE_XML: 93,
      REMOTE_PROC_STORAGE_VOL_DELETE: 94,
      REMOTE_PROC_STORAGE_VOL_LOOKUP_BY_NAME: 95,
      REMOTE_PROC_STORAGE_VOL_LOOKUP_BY_KEY: 96,
      REMOTE_PROC_STORAGE_VOL_LOOKUP_BY_PATH: 97,
      REMOTE_PROC_STORAGE_VOL_GET_INFO: 98,
      REMOTE_PROC_STORAGE_VOL_GET_XML_DESC: 99,
      REMOTE_PROC_STORAGE_VOL_GET_PATH: 100,
      REMOTE_PROC_NODE_GET_CELLS_FREE_MEMORY: 101,
      REMOTE_PROC_NODE_GET_FREE_MEMORY: 102,
      REMOTE_PROC_DOMAIN_BLOCK_PEEK: 103,
      REMOTE_PROC_DOMAIN_MEMORY_PEEK: 104,
      REMOTE_PROC_CONNECT_DOMAIN_EVENT_REGISTER: 105,
      REMOTE_PROC_CONNECT_DOMAIN_EVENT_DEREGISTER: 106,
      REMOTE_PROC_DOMAIN_EVENT_LIFECYCLE: 107,
      REMOTE_PROC_DOMAIN_MIGRATE_PREPARE2: 108,
      REMOTE_PROC_DOMAIN_MIGRATE_FINISH2: 109,
      REMOTE_PROC_CONNECT_GET_URI: 110,
      REMOTE_PROC_NODE_NUM_OF_DEVICES: 111,
      REMOTE_PROC_NODE_LIST_DEVICES: 112,
      REMOTE_PROC_NODE_DEVICE_LOOKUP_BY_NAME: 113,
      REMOTE_PROC_NODE_DEVICE_GET_XML_DESC: 114,
      REMOTE_PROC_NODE_DEVICE_GET_PARENT: 115,
      REMOTE_PROC_NODE_DEVICE_NUM_OF_CAPS: 116,
      REMOTE_PROC_NODE_DEVICE_LIST_CAPS: 117,
      REMOTE_PROC_NODE_DEVICE_DETTACH: 118,
      REMOTE_PROC_NODE_DEVICE_RE_ATTACH: 119,
      REMOTE_PROC_NODE_DEVICE_RESET: 120,
      REMOTE_PROC_DOMAIN_GET_SECURITY_LABEL: 121,
      REMOTE_PROC_NODE_GET_SECURITY_MODEL: 122,
      REMOTE_PROC_NODE_DEVICE_CREATE_XML: 123,
      REMOTE_PROC_NODE_DEVICE_DESTROY: 124,
      REMOTE_PROC_STORAGE_VOL_CREATE_XML_FROM: 125,
      REMOTE_PROC_CONNECT_NUM_OF_INTERFACES: 126,
      REMOTE_PROC_CONNECT_LIST_INTERFACES: 127,
      REMOTE_PROC_INTERFACE_LOOKUP_BY_NAME: 128,
      REMOTE_PROC_INTERFACE_LOOKUP_BY_MAC_STRING: 129,
      REMOTE_PROC_INTERFACE_GET_XML_DESC: 130,
      REMOTE_PROC_INTERFACE_DEFINE_XML: 131,
      REMOTE_PROC_INTERFACE_UNDEFINE: 132,
      REMOTE_PROC_INTERFACE_CREATE: 133,
      REMOTE_PROC_INTERFACE_DESTROY: 134,
      REMOTE_PROC_CONNECT_DOMAIN_XML_FROM_NATIVE: 135,
      REMOTE_PROC_CONNECT_DOMAIN_XML_TO_NATIVE: 136,
      REMOTE_PROC_CONNECT_NUM_OF_DEFINED_INTERFACES: 137,
      REMOTE_PROC_CONNECT_LIST_DEFINED_INTERFACES: 138,
      REMOTE_PROC_CONNECT_NUM_OF_SECRETS: 139,
      REMOTE_PROC_CONNECT_LIST_SECRETS: 140,
      REMOTE_PROC_SECRET_LOOKUP_BY_UUID: 141,
      REMOTE_PROC_SECRET_DEFINE_XML: 142,
      REMOTE_PROC_SECRET_GET_XML_DESC: 143,
      REMOTE_PROC_SECRET_SET_VALUE: 144,
      REMOTE_PROC_SECRET_GET_VALUE: 145,
      REMOTE_PROC_SECRET_UNDEFINE: 146,
      REMOTE_PROC_SECRET_LOOKUP_BY_USAGE: 147,
      REMOTE_PROC_DOMAIN_MIGRATE_PREPARE_TUNNEL: 148,
      REMOTE_PROC_CONNECT_IS_SECURE: 149,
      REMOTE_PROC_DOMAIN_IS_ACTIVE: 150,
      REMOTE_PROC_DOMAIN_IS_PERSISTENT: 151,
      REMOTE_PROC_NETWORK_IS_ACTIVE: 152,
      REMOTE_PROC_NETWORK_IS_PERSISTENT: 153,
      REMOTE_PROC_STORAGE_POOL_IS_ACTIVE: 154,
      REMOTE_PROC_STORAGE_POOL_IS_PERSISTENT: 155,
      REMOTE_PROC_INTERFACE_IS_ACTIVE: 156,
      REMOTE_PROC_CONNECT_GET_LIB_VERSION: 157,
      REMOTE_PROC_CONNECT_COMPARE_CPU: 158,
      REMOTE_PROC_DOMAIN_MEMORY_STATS: 159,
      REMOTE_PROC_DOMAIN_ATTACH_DEVICE_FLAGS: 160,
      REMOTE_PROC_DOMAIN_DETACH_DEVICE_FLAGS: 161,
      REMOTE_PROC_CONNECT_BASELINE_CPU: 162,
      REMOTE_PROC_DOMAIN_GET_JOB_INFO: 163,
      REMOTE_PROC_DOMAIN_ABORT_JOB: 164,
      REMOTE_PROC_STORAGE_VOL_WIPE: 165,
      REMOTE_PROC_DOMAIN_MIGRATE_SET_MAX_DOWNTIME: 166,
      REMOTE_PROC_CONNECT_DOMAIN_EVENT_REGISTER_ANY: 167,
      REMOTE_PROC_CONNECT_DOMAIN_EVENT_DEREGISTER_ANY: 168,
      REMOTE_PROC_DOMAIN_EVENT_REBOOT: 169,
      REMOTE_PROC_DOMAIN_EVENT_RTC_CHANGE: 170,
      REMOTE_PROC_DOMAIN_EVENT_WATCHDOG: 171,
      REMOTE_PROC_DOMAIN_EVENT_IO_ERROR: 172,
      REMOTE_PROC_DOMAIN_EVENT_GRAPHICS: 173,
      REMOTE_PROC_DOMAIN_UPDATE_DEVICE_FLAGS: 174,
      REMOTE_PROC_NWFILTER_LOOKUP_BY_NAME: 175,
      REMOTE_PROC_NWFILTER_LOOKUP_BY_UUID: 176,
      REMOTE_PROC_NWFILTER_GET_XML_DESC: 177,
      REMOTE_PROC_CONNECT_NUM_OF_NWFILTERS: 178,
      REMOTE_PROC_CONNECT_LIST_NWFILTERS: 179,
      REMOTE_PROC_NWFILTER_DEFINE_XML: 180,
      REMOTE_PROC_NWFILTER_UNDEFINE: 181,
      REMOTE_PROC_DOMAIN_MANAGED_SAVE: 182,
      REMOTE_PROC_DOMAIN_HAS_MANAGED_SAVE_IMAGE: 183,
      REMOTE_PROC_DOMAIN_MANAGED_SAVE_REMOVE: 184,
      REMOTE_PROC_DOMAIN_SNAPSHOT_CREATE_XML: 185,
      REMOTE_PROC_DOMAIN_SNAPSHOT_GET_XML_DESC: 186,
      REMOTE_PROC_DOMAIN_SNAPSHOT_NUM: 187,
      REMOTE_PROC_DOMAIN_SNAPSHOT_LIST_NAMES: 188,
      REMOTE_PROC_DOMAIN_SNAPSHOT_LOOKUP_BY_NAME: 189,
      REMOTE_PROC_DOMAIN_HAS_CURRENT_SNAPSHOT: 190,
      REMOTE_PROC_DOMAIN_SNAPSHOT_CURRENT: 191,
      REMOTE_PROC_DOMAIN_REVERT_TO_SNAPSHOT: 192,
      REMOTE_PROC_DOMAIN_SNAPSHOT_DELETE: 193,
      REMOTE_PROC_DOMAIN_GET_BLOCK_INFO: 194,
      REMOTE_PROC_DOMAIN_EVENT_IO_ERROR_REASON: 195,
      REMOTE_PROC_DOMAIN_CREATE_WITH_FLAGS: 196,
      REMOTE_PROC_DOMAIN_SET_MEMORY_PARAMETERS: 197,
      REMOTE_PROC_DOMAIN_GET_MEMORY_PARAMETERS: 198,
      REMOTE_PROC_DOMAIN_SET_VCPUS_FLAGS: 199,
      REMOTE_PROC_DOMAIN_GET_VCPUS_FLAGS: 200,
      REMOTE_PROC_DOMAIN_OPEN_CONSOLE: 201,
      REMOTE_PROC_DOMAIN_IS_UPDATED: 202,
      REMOTE_PROC_CONNECT_GET_SYSINFO: 203,
      REMOTE_PROC_DOMAIN_SET_MEMORY_FLAGS: 204,
      REMOTE_PROC_DOMAIN_SET_BLKIO_PARAMETERS: 205,
      REMOTE_PROC_DOMAIN_GET_BLKIO_PARAMETERS: 206,
      REMOTE_PROC_DOMAIN_MIGRATE_SET_MAX_SPEED: 207,
      REMOTE_PROC_STORAGE_VOL_UPLOAD: 208,
      REMOTE_PROC_STORAGE_VOL_DOWNLOAD: 209,
      REMOTE_PROC_DOMAIN_INJECT_NMI: 210,
      REMOTE_PROC_DOMAIN_SCREENSHOT: 211,
      REMOTE_PROC_DOMAIN_GET_STATE: 212,
      REMOTE_PROC_DOMAIN_MIGRATE_BEGIN3: 213,
      REMOTE_PROC_DOMAIN_MIGRATE_PREPARE3: 214,
      REMOTE_PROC_DOMAIN_MIGRATE_PREPARE_TUNNEL3: 215,
      REMOTE_PROC_DOMAIN_MIGRATE_PERFORM3: 216,
      REMOTE_PROC_DOMAIN_MIGRATE_FINISH3: 217,
      REMOTE_PROC_DOMAIN_MIGRATE_CONFIRM3: 218,
      REMOTE_PROC_DOMAIN_SET_SCHEDULER_PARAMETERS_FLAGS: 219,
      REMOTE_PROC_INTERFACE_CHANGE_BEGIN: 220,
      REMOTE_PROC_INTERFACE_CHANGE_COMMIT: 221,
      REMOTE_PROC_INTERFACE_CHANGE_ROLLBACK: 222,
      REMOTE_PROC_DOMAIN_GET_SCHEDULER_PARAMETERS_FLAGS: 223,
      REMOTE_PROC_DOMAIN_EVENT_CONTROL_ERROR: 224,
      REMOTE_PROC_DOMAIN_PIN_VCPU_FLAGS: 225,
      REMOTE_PROC_DOMAIN_SEND_KEY: 226,
      REMOTE_PROC_NODE_GET_CPU_STATS: 227,
      REMOTE_PROC_NODE_GET_MEMORY_STATS: 228,
      REMOTE_PROC_DOMAIN_GET_CONTROL_INFO: 229,
      REMOTE_PROC_DOMAIN_GET_VCPU_PIN_INFO: 230,
      REMOTE_PROC_DOMAIN_UNDEFINE_FLAGS: 231,
      REMOTE_PROC_DOMAIN_SAVE_FLAGS: 232,
      REMOTE_PROC_DOMAIN_RESTORE_FLAGS: 233,
      REMOTE_PROC_DOMAIN_DESTROY_FLAGS: 234,
      REMOTE_PROC_DOMAIN_SAVE_IMAGE_GET_XML_DESC: 235,
      REMOTE_PROC_DOMAIN_SAVE_IMAGE_DEFINE_XML: 236,
      REMOTE_PROC_DOMAIN_BLOCK_JOB_ABORT: 237,
      REMOTE_PROC_DOMAIN_GET_BLOCK_JOB_INFO: 238,
      REMOTE_PROC_DOMAIN_BLOCK_JOB_SET_SPEED: 239,
      REMOTE_PROC_DOMAIN_BLOCK_PULL: 240,
      REMOTE_PROC_DOMAIN_EVENT_BLOCK_JOB: 241,
      REMOTE_PROC_DOMAIN_MIGRATE_GET_MAX_SPEED: 242,
      REMOTE_PROC_DOMAIN_BLOCK_STATS_FLAGS: 243,
      REMOTE_PROC_DOMAIN_SNAPSHOT_GET_PARENT: 244,
      REMOTE_PROC_DOMAIN_RESET: 245,
      REMOTE_PROC_DOMAIN_SNAPSHOT_NUM_CHILDREN: 246,
      REMOTE_PROC_DOMAIN_SNAPSHOT_LIST_CHILDREN_NAMES: 247,
      REMOTE_PROC_DOMAIN_EVENT_DISK_CHANGE: 248,
      REMOTE_PROC_DOMAIN_OPEN_GRAPHICS: 249,
      REMOTE_PROC_NODE_SUSPEND_FOR_DURATION: 250,
      REMOTE_PROC_DOMAIN_BLOCK_RESIZE: 251,
      REMOTE_PROC_DOMAIN_SET_BLOCK_IO_TUNE: 252,
      REMOTE_PROC_DOMAIN_GET_BLOCK_IO_TUNE: 253,
      REMOTE_PROC_DOMAIN_SET_NUMA_PARAMETERS: 254,
      REMOTE_PROC_DOMAIN_GET_NUMA_PARAMETERS: 255,
      REMOTE_PROC_DOMAIN_SET_INTERFACE_PARAMETERS: 256,
      REMOTE_PROC_DOMAIN_GET_INTERFACE_PARAMETERS: 257,
      REMOTE_PROC_DOMAIN_SHUTDOWN_FLAGS: 258,
      REMOTE_PROC_STORAGE_VOL_WIPE_PATTERN: 259,
      REMOTE_PROC_STORAGE_VOL_RESIZE: 260,
      REMOTE_PROC_DOMAIN_PM_SUSPEND_FOR_DURATION: 261,
      REMOTE_PROC_DOMAIN_GET_CPU_STATS: 262,
      REMOTE_PROC_DOMAIN_GET_DISK_ERRORS: 263,
      REMOTE_PROC_DOMAIN_SET_METADATA: 264,
      REMOTE_PROC_DOMAIN_GET_METADATA: 265,
      REMOTE_PROC_DOMAIN_BLOCK_REBASE: 266,
      REMOTE_PROC_DOMAIN_PM_WAKEUP: 267,
      REMOTE_PROC_DOMAIN_EVENT_TRAY_CHANGE: 268,
      REMOTE_PROC_DOMAIN_EVENT_PMWAKEUP: 269,
      REMOTE_PROC_DOMAIN_EVENT_PMSUSPEND: 270,
      REMOTE_PROC_DOMAIN_SNAPSHOT_IS_CURRENT: 271,
      REMOTE_PROC_DOMAIN_SNAPSHOT_HAS_METADATA: 272,
      REMOTE_PROC_CONNECT_LIST_ALL_DOMAINS: 273,
      REMOTE_PROC_DOMAIN_LIST_ALL_SNAPSHOTS: 274,
      REMOTE_PROC_DOMAIN_SNAPSHOT_LIST_ALL_CHILDREN: 275,
      REMOTE_PROC_DOMAIN_EVENT_BALLOON_CHANGE: 276,
      REMOTE_PROC_DOMAIN_GET_HOSTNAME: 277,
      REMOTE_PROC_DOMAIN_GET_SECURITY_LABEL_LIST: 278,
      REMOTE_PROC_DOMAIN_PIN_EMULATOR: 279,
      REMOTE_PROC_DOMAIN_GET_EMULATOR_PIN_INFO: 280,
      REMOTE_PROC_CONNECT_LIST_ALL_STORAGE_POOLS: 281,
      REMOTE_PROC_STORAGE_POOL_LIST_ALL_VOLUMES: 282,
      REMOTE_PROC_CONNECT_LIST_ALL_NETWORKS: 283,
      REMOTE_PROC_CONNECT_LIST_ALL_INTERFACES: 284,
      REMOTE_PROC_CONNECT_LIST_ALL_NODE_DEVICES: 285,
      REMOTE_PROC_CONNECT_LIST_ALL_NWFILTERS: 286,
      REMOTE_PROC_CONNECT_LIST_ALL_SECRETS: 287,
      REMOTE_PROC_NODE_SET_MEMORY_PARAMETERS: 288,
      REMOTE_PROC_NODE_GET_MEMORY_PARAMETERS: 289,
      REMOTE_PROC_DOMAIN_BLOCK_COMMIT: 290,
      REMOTE_PROC_NETWORK_UPDATE: 291,
      REMOTE_PROC_DOMAIN_EVENT_PMSUSPEND_DISK: 292,
      REMOTE_PROC_NODE_GET_CPU_MAP: 293,
      REMOTE_PROC_DOMAIN_FSTRIM: 294,
      REMOTE_PROC_DOMAIN_SEND_PROCESS_SIGNAL: 295,
      REMOTE_PROC_DOMAIN_OPEN_CHANNEL: 296,
      REMOTE_PROC_NODE_DEVICE_LOOKUP_SCSI_HOST_BY_WWN: 297,
      REMOTE_PROC_DOMAIN_GET_JOB_STATS: 298,
      REMOTE_PROC_DOMAIN_MIGRATE_GET_COMPRESSION_CACHE: 299,
      REMOTE_PROC_DOMAIN_MIGRATE_SET_COMPRESSION_CACHE: 300,
      REMOTE_PROC_NODE_DEVICE_DETACH_FLAGS: 301,
      REMOTE_PROC_DOMAIN_MIGRATE_BEGIN3_PARAMS: 302,
      REMOTE_PROC_DOMAIN_MIGRATE_PREPARE3_PARAMS: 303,
      REMOTE_PROC_DOMAIN_MIGRATE_PREPARE_TUNNEL3_PARAMS: 304,
      REMOTE_PROC_DOMAIN_MIGRATE_PERFORM3_PARAMS: 305,
      REMOTE_PROC_DOMAIN_MIGRATE_FINISH3_PARAMS: 306,
      REMOTE_PROC_DOMAIN_MIGRATE_CONFIRM3_PARAMS: 307,
      REMOTE_PROC_DOMAIN_SET_MEMORY_STATS_PERIOD: 308,
      REMOTE_PROC_DOMAIN_CREATE_XML_WITH_FILES: 309,
      REMOTE_PROC_DOMAIN_CREATE_WITH_FILES: 310,
      REMOTE_PROC_DOMAIN_EVENT_DEVICE_REMOVED: 311,
      REMOTE_PROC_CONNECT_GET_CPU_MODEL_NAMES: 312,
      REMOTE_PROC_CONNECT_NETWORK_EVENT_REGISTER_ANY: 313,
      REMOTE_PROC_CONNECT_NETWORK_EVENT_DEREGISTER_ANY: 314,
      REMOTE_PROC_NETWORK_EVENT_LIFECYCLE: 315,
      REMOTE_PROC_CONNECT_DOMAIN_EVENT_CALLBACK_REGISTER_ANY: 316,
      REMOTE_PROC_CONNECT_DOMAIN_EVENT_CALLBACK_DEREGISTER_ANY: 317,
      REMOTE_PROC_DOMAIN_EVENT_CALLBACK_LIFECYCLE: 318,
      REMOTE_PROC_DOMAIN_EVENT_CALLBACK_REBOOT: 319,
      REMOTE_PROC_DOMAIN_EVENT_CALLBACK_RTC_CHANGE: 320,
      REMOTE_PROC_DOMAIN_EVENT_CALLBACK_WATCHDOG: 321,
      REMOTE_PROC_DOMAIN_EVENT_CALLBACK_IO_ERROR: 322,
      REMOTE_PROC_DOMAIN_EVENT_CALLBACK_GRAPHICS: 323,
      REMOTE_PROC_DOMAIN_EVENT_CALLBACK_IO_ERROR_REASON: 324,
      REMOTE_PROC_DOMAIN_EVENT_CALLBACK_CONTROL_ERROR: 325,
      REMOTE_PROC_DOMAIN_EVENT_CALLBACK_BLOCK_JOB: 326,
      REMOTE_PROC_DOMAIN_EVENT_CALLBACK_DISK_CHANGE: 327,
      REMOTE_PROC_DOMAIN_EVENT_CALLBACK_TRAY_CHANGE: 328,
      REMOTE_PROC_DOMAIN_EVENT_CALLBACK_PMWAKEUP: 329,
      REMOTE_PROC_DOMAIN_EVENT_CALLBACK_PMSUSPEND: 330,
      REMOTE_PROC_DOMAIN_EVENT_CALLBACK_BALLOON_CHANGE: 331,
      REMOTE_PROC_DOMAIN_EVENT_CALLBACK_PMSUSPEND_DISK: 332,
      REMOTE_PROC_DOMAIN_EVENT_CALLBACK_DEVICE_REMOVED: 333,
      REMOTE_PROC_DOMAIN_CORE_DUMP_WITH_FORMAT: 334,
      REMOTE_PROC_DOMAIN_FSFREEZE: 335,
      REMOTE_PROC_DOMAIN_FSTHAW: 336,
      REMOTE_PROC_DOMAIN_GET_TIME: 337,
      REMOTE_PROC_DOMAIN_SET_TIME: 338,
      REMOTE_PROC_DOMAIN_EVENT_BLOCK_JOB_2: 339,
      REMOTE_PROC_NODE_GET_FREE_PAGES: 340,
      REMOTE_PROC_NETWORK_GET_DHCP_LEASES: 341,
      REMOTE_PROC_CONNECT_GET_DOMAIN_CAPABILITIES: 342,
      REMOTE_PROC_DOMAIN_OPEN_GRAPHICS_FD: 343,
      REMOTE_PROC_CONNECT_GET_ALL_DOMAIN_STATS: 344,
      REMOTE_PROC_DOMAIN_BLOCK_COPY: 345,
      REMOTE_PROC_DOMAIN_EVENT_CALLBACK_TUNABLE: 346,
      REMOTE_PROC_NODE_ALLOC_PAGES: 347,
      REMOTE_PROC_DOMAIN_EVENT_CALLBACK_AGENT_LIFECYCLE: 348,
      REMOTE_PROC_DOMAIN_GET_FSINFO: 349,
      REMOTE_PROC_DOMAIN_DEFINE_XML_FLAGS: 350,
      REMOTE_PROC_DOMAIN_GET_IOTHREAD_INFO: 351,
      REMOTE_PROC_DOMAIN_PIN_IOTHREAD: 352,
      REMOTE_PROC_DOMAIN_INTERFACE_ADDRESSES: 353,
      REMOTE_PROC_DOMAIN_EVENT_CALLBACK_DEVICE_ADDED: 354,
      REMOTE_PROC_DOMAIN_ADD_IOTHREAD: 355,
      REMOTE_PROC_DOMAIN_DEL_IOTHREAD: 356,
      REMOTE_PROC_DOMAIN_SET_USER_PASSWORD: 357,
      REMOTE_PROC_DOMAIN_RENAME: 358,
      REMOTE_PROC_DOMAIN_EVENT_CALLBACK_MIGRATION_ITERATION: 359,
      REMOTE_PROC_CONNECT_REGISTER_CLOSE_CALLBACK: 360,
      REMOTE_PROC_CONNECT_UNREGISTER_CLOSE_CALLBACK: 361,
      REMOTE_PROC_CONNECT_EVENT_CONNECTION_CLOSED: 362,
      REMOTE_PROC_DOMAIN_EVENT_CALLBACK_JOB_COMPLETED: 363,
      REMOTE_PROC_DOMAIN_MIGRATE_START_POST_COPY: 364,
      REMOTE_PROC_DOMAIN_GET_PERF_EVENTS: 365,
      REMOTE_PROC_DOMAIN_SET_PERF_EVENTS: 366,
      REMOTE_PROC_DOMAIN_EVENT_CALLBACK_DEVICE_REMOVAL_FAILED: 367,
      REMOTE_PROC_CONNECT_STORAGE_POOL_EVENT_REGISTER_ANY: 368,
      REMOTE_PROC_CONNECT_STORAGE_POOL_EVENT_DEREGISTER_ANY: 369,
      REMOTE_PROC_STORAGE_POOL_EVENT_LIFECYCLE: 370,
      REMOTE_PROC_DOMAIN_GET_GUEST_VCPUS: 371,
      REMOTE_PROC_DOMAIN_SET_GUEST_VCPUS: 372,
      REMOTE_PROC_STORAGE_POOL_EVENT_REFRESH: 373,
      REMOTE_PROC_CONNECT_NODE_DEVICE_EVENT_REGISTER_ANY: 374,
      REMOTE_PROC_CONNECT_NODE_DEVICE_EVENT_DEREGISTER_ANY: 375,
      REMOTE_PROC_NODE_DEVICE_EVENT_LIFECYCLE: 376,
      REMOTE_PROC_NODE_DEVICE_EVENT_UPDATE: 377,
      REMOTE_PROC_STORAGE_VOL_GET_INFO_FLAGS: 378,
      REMOTE_PROC_DOMAIN_EVENT_CALLBACK_METADATA_CHANGE: 379,
      REMOTE_PROC_CONNECT_SECRET_EVENT_REGISTER_ANY: 380,
      REMOTE_PROC_CONNECT_SECRET_EVENT_DEREGISTER_ANY: 381,
      REMOTE_PROC_SECRET_EVENT_LIFECYCLE: 382,
      REMOTE_PROC_SECRET_EVENT_VALUE_CHANGED: 383
    });
  });
}

module.exports = setup;
